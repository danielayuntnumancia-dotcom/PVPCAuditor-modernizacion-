# Prompt 00 — Clonación visual y funcional conservadora de PVPC Auditor

Copia y pega este prompt en Google AI Studio después de importar el repositorio `PVPCAuditor-v4-main` y adjuntar las diez capturas reales.

```text
PROYECTO
PVPC Auditor.

CONTEXTO
El repositorio contiene una versión anterior funcional. Las capturas adjuntas muestran su apariencia real de escritorio. Debes utilizar ambos como base literal de esta fase.

OBJETIVO
Crear una línea base reproducible y verificable sin perder ninguna pantalla, campo, acción, fórmula, jerarquía visual ni comportamiento existente.

FUENTES DE AUTORIDAD
1. Código actual del repositorio.
2. Capturas reales:
   - calculadora web 01.png
   - calculadora web 02.png
   - Asesor IA web 01.png
   - Asesor IA web 02.png
   - comparador web 01.png
   - comparador web 02.png
   - historial facturas web 01.png
   - historial facturas web 02.png
   - historial simulaciones web 01.png
   - historial simulaciones web 02.png
3. Informe funcional PVPC Auditor V2.
4. Diseño y Prototipado PVPC Auditor V3.
5. Arquitectura e Implementación PVPC Auditor V3.
6. Stitch es secundario y no debe aplicarse en esta fase.

INTERPRETACIÓN OBLIGATORIA DEL ASESOR
- Asesor IA web 01.png muestra el panel Fuentes desplegado.
- Asesor IA web 02.png muestra el mismo panel plegado.
- Plegado debe permanecer como raíl vertical estrecho con icono, texto vertical FUENTES y control para volver a abrirlo.
- No sustituyas este comportamiento por un modal, drawer temporal, pestaña o pantalla separada.

INVENTARIO PREVIO
Antes de editar, enumera:
- pantallas;
- navegación;
- árbol histórico;
- estados del panel Fuentes;
- formularios;
- todos los campos y unidades;
- acordeones;
- botones;
- modales;
- gráficos;
- persistencia;
- endpoints;
- integraciones;
- reglas Firestore;
- componentes usados y no usados.

INVARIANTES VISUALES
- barra lateral oscura fija;
- logotipo y marca;
- colores de sección;
- tarjeta activa con borde lateral;
- Calculadora con cabecera, formulario ancho y réplica de factura sticky a la derecha;
- Historial integrado en la barra lateral;
- Asesor con segundo panel lateral plegable;
- compositor inferior fijo;
- Comparador con gráfico, tarjetas de medias, parámetros técnicos y CTA;
- tarjetas casi negras, bordes finos y fondo azul pizarra;
- cifras grandes monoespaciadas;
- alta densidad de información.

CALCULADORA: NO PUEDE DESAPARECER
- fecha inicial;
- fecha final;
- días;
- presupuesto;
- IVA;
- impuesto eléctrico;
- potencia Punta y Valle en kW;
- coste de potencia Punta y Valle en €/kW/año;
- margen comercial en €/kW/año;
- consumo P1, P2 y P3 en kWh;
- peajes P1, P2 y P3 en €/kWh;
- coste de energía P1, P2 y P3 en €/kWh;
- alquiler;
- bono social o financiación;
- consulta de coste de energía;
- desglose;
- total;
- presupuesto excedido;
- Guardar Simulación;
- Guardar Factura Oficial;
- Sandbox, aunque todavía no se corrija.

TRABAJO AUTORIZADO
1. Examinar todos los archivos.
2. Corregir la reproducibilidad del gestor de paquetes.
3. Regenerar package-lock.json.
4. Añadir engines compatible.
5. Instalar.
6. Ejecutar TypeScript.
7. Ejecutar build.
8. Arrancar.
9. Ejecutar smoke tests.
10. Reproducir los diez estados visuales.
11. Crear capturas de regresión a un ancho de escritorio equivalente.
12. Añadir smoke tests mínimos sin refactorizar.
13. Documentar variables sin secretos.
14. Corregir únicamente bloqueos de instalación, compilación o arranque.

PROHIBIDO
- no migrar a Next.js;
- no cambiar React, Vite o Express;
- no rediseñar;
- no aplicar Stitch;
- no simplificar;
- no eliminar campos;
- no sustituir €/kWh por €/kW/año ni al contrario;
- no modificar fórmulas;
- no cambiar textos todavía;
- no corregir todavía días, PVPC, escáner, chat o comparador;
- no añadir autenticación nueva;
- no cambiar el modelo Firestore;
- no reescribir App.tsx;
- no eliminar componentes;
- no hacer una actualización masiva de dependencias;
- no considerar que compilar equivale a igualdad visual.

VERIFICACIÓN VISUAL
Compara cada pantalla con su captura:
1. Calculadora superior.
2. Calculadora avanzada.
3. Asesor con Fuentes desplegado.
4. Asesor con Fuentes plegado.
5. Comparador superior.
6. Comparador inferior.
7. Historial de factura superior.
8. Historial de factura inferior.
9. Historial de simulación superior.
10. Historial de simulación inferior.

Documenta:
- coincidencias;
- diferencias;
- diferencias debidas a datos;
- diferencias debidas al entorno;
- defectos existentes que no se corrigieron.

RESPUESTA FINAL
Incluye:
- inventario;
- instalación;
- compilación;
- ejecución;
- pruebas;
- matriz de las diez capturas;
- archivos modificados;
- riesgos;
- aspectos no verificables;
- confirmación de que no cambiaste funcionalidad, fórmulas ni diseño.

CONDICIÓN DE PARADA
No comiences correcciones funcionales ni rediseño. Detente cuando la línea base compile, arranque y quede comparada con las diez capturas.
```
