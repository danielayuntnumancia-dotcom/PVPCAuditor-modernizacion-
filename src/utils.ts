import { BillData, BillResults } from "./types";

// Valores oficiales de referencia para PVPC 2.0TD en España
export const DEFAULT_PVPC_VALUES: BillData = {
  fechaInicio: "2026-06-01",
  fechaFin: "2026-06-30",
  presupuesto: 100,
  kwPunta: 4.4,
  kwValle: 4.4,
  precioMargen: 3.113,
  precioKwPunta: 27.704413,
  precioKwValle: 0.725423,
  kwhPunta: 85.2,
  kwhLlano: 92.4,
  kwhValle: 140.8,
  precioKwhPunta: 0.097553,
  precioKwhLlano: 0.003292,
  precioKwhValle: 0.029267,
  costeEnergiaVariable: 0.169183,
  costeEnergiaPunta: 0.169183,
  costeEnergiaLlano: 0.169183,
  costeEnergiaValle: 0.169183,
  alqContador: 0.026630,
  bonoSocial: 0.60,
  iee: 5.11269632,
  iva: 21, 
};

export const DEMO_PROFILES = [
  {
    name: "Perfil Ahorrador",
    description: "Bajo consumo, potencia optimizada (3.3 kW) y hábitos eficientes en periodo valle.",
    data: {
      ...DEFAULT_PVPC_VALUES,
      kwPunta: 3.3,
      kwValle: 3.3,
      kwhPunta: 40.2,
      kwhLlano: 45.1,
      kwhValle: 95.8,
      presupuesto: 60,
    }
  },
  {
    name: "Hogar Familiar (Consumo Alto)",
    description: "Potencia elevada (5.5 kW) y uso intensivo de electrodomésticos en horas punta/llano.",
    data: {
      ...DEFAULT_PVPC_VALUES,
      kwPunta: 5.5,
      kwValle: 5.5,
      kwhPunta: 155.4,
      kwhLlano: 180.2,
      kwhValle: 210.5,
      presupuesto: 150,
    }
  }
];

export function calcularFactura(data: BillData): BillResults {
  const fIni = new Date(data.fechaInicio);
  const fFin = new Date(data.fechaFin);
  let dias = 1;
  
  if (!isNaN(fIni.getTime()) && !isNaN(fFin.getTime()) && fFin >= fIni) {
    dias = Math.ceil((fFin.getTime() - fIni.getTime()) / (1000 * 3600 * 24)) || 1;
  }

  // 1. Término Fijo (Potencia prorrateada por días)
  const costePuntaFijo = (data.kwPunta * data.precioKwPunta * dias) / 365;
  const costeValleFijo = (data.kwValle * data.precioKwValle * dias) / 365;
  const costeMargen = (data.kwPunta * data.precioMargen * dias) / 365;
  const totalFijo = costePuntaFijo + costeValleFijo + costeMargen;

  // 2. Término Variable (Energía Consumida + Peajes de Acceso)
  const costePeajes = (data.kwhPunta * data.precioKwhPunta) +
                      (data.kwhLlano * data.precioKwhLlano) +
                      (data.kwhValle * data.precioKwhValle);
                      
  const costeEnergia = (data.kwhPunta * (data.costeEnergiaPunta ?? data.costeEnergiaVariable)) +
                       (data.kwhLlano * (data.costeEnergiaLlano ?? data.costeEnergiaVariable)) +
                       (data.kwhValle * (data.costeEnergiaValle ?? data.costeEnergiaVariable));
                       
  const totalVariable = costePeajes + costeEnergia;

  // 3. Impuesto sobre la Electricidad (IEE) sobre Base Eléctrica
  const baseElectrica = totalFijo + totalVariable;
  const totalIee = baseElectrica * (data.iee / 100);

  // 4. Conceptos Regulados
  const totalRegulados = data.bonoSocial + (data.alqContador * dias);

  // 5. IVA aplicado sobre la Base Imponible Completa
  const baseImponible = baseElectrica + totalIee + totalRegulados;
  const totalIva = baseImponible * (data.iva / 100);

  // 6. Importe Total
  const totalFactura = baseImponible + totalIva;
  const alertaPresupuesto = data.presupuesto > 0 && totalFactura > data.presupuesto;

  return {
    dias,
    totalFijo: Number(totalFijo.toFixed(4)),
    totalVariable: Number(totalVariable.toFixed(4)),
    totalPeajes: Number(costePeajes.toFixed(4)),
    totalEnergia: Number(costeEnergia.toFixed(4)),
    totalIee: Number(totalIee.toFixed(4)),
    totalRegulados: Number(totalRegulados.toFixed(4)),
    totalIva: Number(totalIva.toFixed(4)),
    totalFactura: Number(totalFactura.toFixed(2)),
    alertaPresupuesto,
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "-";
  try {
    const parts = dateStr.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateStr;
  } catch {
    return dateStr;
  }
}