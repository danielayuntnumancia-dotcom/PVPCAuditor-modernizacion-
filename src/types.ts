export interface BillData {
  fechaInicio: string;
  fechaFin: string;
  presupuesto: number;
  
  // Potencia contratada
  kwPunta: number;
  kwValle: number;
  precioMargen: number; // €/kW/año
  precioKwPunta: number; // €/kW/año
  precioKwValle: number; // €/kW/año
  
  // Consumo energético
  kwhPunta: number;
  kwhLlano: number;
  kwhValle: number;
  
  // Preajes y cargos de consumo
  precioKwhPunta: number; // €/kWh
  precioKwhLlano: number; // €/kWh
  precioKwhValle: number; // €/kWh
  
  // Coste energía variable (mercado mayorista Pool)
  costeEnergiaVariable: number; // €/kWh
  costeEnergiaPunta: number; // €/kWh
  costeEnergiaLlano: number; // €/kWh
  costeEnergiaValle: number; // €/kWh
  
  // Conceptos regulados
  alqContador: number; // €/día
  bonoSocial: number; // € fijo periodo
  
  // Impuestos
  iee: number; // % Impuesto Eléctrico
  iva: number; // % IVA (10 o 21)
}

export interface BillResults {
  dias: number;
  totalFijo: number;
  totalVariable: number;
  totalPeajes: number;
  totalEnergia: number;
  totalIee: number;
  totalRegulados: number;
  totalIva: number;
  totalFactura: number;
  alertaPresupuesto: boolean;
}

export interface SourceFile {
  id: string;
  name: string;
  timestamp: number;
  explanation: string;
  parsedData: Partial<BillData>; // Datos listos para cargar si el usuario acepta
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Array<{ title: string; url: string }>;
  timestamp: string;
  sourceFileId?: string; // Vinculación opcional con la factura origen
  imageUrl?: string; // URL o base64 para mostrar miniatura de la imagen enviada
}

export interface HistoryEntry {
  id: string;
  dateStr: string; // "DD/MM/YYYY" or "YYYY-MM-DD"
  timestamp: number;
  billData: BillData;
  results: BillResults;
  tipo: 'simulacion' | 'oficial';
  mesFacturacion?: string;
}

export interface MarketOffer {
  name: string;
  company: string;
  type: string;
  energyPriceDetails: string;
  powerPriceDetails: string;
  estimatedMonthlyCost: number;
  pros: string[];
  cons: string[];
  link: string;
}

export interface MarketAnalysisData {
  offers: MarketOffer[];
  recommendations: string;
  cheapestTariffName: string;
  estimatedAnnualSavings: number;
  citations?: Array<{ title: string; url: string }>;
}