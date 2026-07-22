# Diseño y Prototipado — PVPC Auditor

**Proyecto:** PVPC Auditor  
**Documento:** Diseño y prototipado conservador  
**Versión:** V3  
**Fecha:** 22 de julio de 2026  
**Estado:** Vigente para clonación visual y modernización conservadora  
**Sustituye a:** `Diseño y Prototipado PVPC Auditor V2.md`  
**Fuente funcional:** `Informe funcional PVPC Auditor V2.md`  
**Fuente visual principal:** capturas reales de la aplicación anterior y código del ZIP `PVPCAuditor-v4-main.zip`  
**Fuente visual secundaria:** imágenes aprobadas de Google Stitch  
**Sistema visual complementario:** `DESIGN.md`  

---

## 0. Control de fuentes y cambio de estrategia

### 0.1 Fuentes utilizadas

1. `Informe funcional PVPC Auditor V2.md`.
2. `PVPC Auditor V1.md`, auditoría técnica completa de la aplicación anterior.
3. `PVPCAuditor-v4-main.zip`, código real de la aplicación anterior.
4. `Diseño y Prototipado PVPC Auditor V1.md`.
5. `DESIGN.md`.
6. Capturas reales de la aplicación anterior:
   - `calculadora web 01.png`
   - `calculadora web 02.png`
   - `Asesor IA web 01.png`
   - `Asesor IA web 02.png`
   - `comparador web 01.png`
   - `comparador web 02.png`
   - `historial facturas web 01.png`
   - `historial facturas web 02.png`
   - `historial simulaciones web 01.png`
   - `historial simulaciones web 02.png`
7. Imágenes de Google Stitch:
   - Calculadora web.
   - Asesor web y móvil.
   - Historial web y móvil.
   - Comparador web y móvil.
8. Decisiones técnicas confirmadas durante el cuestionario.

### 0.2 Cambio respecto a V1

La V1 proponía una reconstrucción visual desde cero basada principalmente en Stitch. Esa estrategia queda sustituida.

La V2 adopta una **modernización conservadora**:

- la aplicación anterior pasa a ser la referencia funcional y visual principal;
- se preservan sus campos, densidad, jerarquía, navegación y carácter técnico;
- Stitch se utiliza únicamente para mejorar elementos concretos;
- ninguna simplificación puede eliminar parámetros o capacidades existentes;
- las correcciones funcionales y de seguridad tienen prioridad sobre cambios estéticos;
- cualquier cambio visual relevante debe aprobarse de forma explícita.

### 0.3 Principio rector

> La nueva versión debe parecer y comportarse como una evolución directa de la aplicación anterior, no como un producto distinto inspirado en ella.

### 0.4 Jerarquía visual de fuentes

En caso de discrepancia visual se utilizará este orden:

1. Capturas reales de la aplicación anterior.
2. Código y estilos del repositorio anterior.
3. Este documento V3.
4. `DESIGN.md`.
5. Imágenes de Stitch.

Las capturas confirman el aspecto de escritorio. No se han aportado capturas móviles de la aplicación anterior; para móvil se utilizarán el código responsive existente, este documento y Stitch, sin reducir funcionalidades.

### 0.5 Interpretación del panel de fuentes

Las capturas `Asesor IA web 01.png` y `Asesor IA web 02.png` representan los dos estados del mismo panel:

- **01:** panel de Fuentes de datos desplegado.
- **02:** panel plegado como raíl vertical estrecho con icono de carpeta, texto vertical `FUENTES` y control de despliegue.

Este comportamiento es una capacidad visual obligatoria y no debe sustituirse por un modal, un menú flotante ni una pestaña independiente en escritorio.

---

## 1. Identidad visual vigente

### 1.1 Personalidad

- Técnica.
- Analítica.
- Densa.
- Instrumental.
- Sobria.
- Orientada a usuarios que quieren ver los parámetros reales.
- Menos decorativa que la propuesta Stitch.
- Conservar sensación de panel de auditoría energética.

### 1.2 Dirección estética

La interfaz existente utiliza:

- fondo oscuro azul pizarra;
- paneles casi negros;
- bordes finos;
- acentos por sección;
- tarjetas compactas;
- tipografía monoespaciada para cifras;
- gran cantidad de datos visibles;
- acordeones técnicos;
- navegación lateral en escritorio;
- navegación inferior en móvil.

Se conserva este lenguaje.

Las mejoras de V2 deben limitarse a:

- contraste;
- consistencia;
- accesibilidad;
- estados de foco;
- espaciado;
- responsive;
- claridad de etiquetas;
- procedencia de datos;
- mensajes de error;
- eliminación de afirmaciones engañosas.

### 1.3 Colores

Se mantienen los colores aproximados de la aplicación anterior:

| Función | Color |
|---|---|
| Fondo principal | Azul pizarra muy oscuro |
| Panel principal | Azul-negro |
| Bordes | Gris azulado |
| Calculadora y acciones positivas | Esmeralda |
| Asesor IA | Índigo |
| Comparador | Ámbar |
| Errores y presupuesto excedido | Rosa/rojo |
| Punta P1 | Rojo |
| Llano P2 | Amarillo |
| Valle P3 | Verde |

`DESIGN.md` puede normalizar los tokens, pero no debe cambiar la identidad percibida.

### 1.4 Tipografía

- Encabezados: Space Grotesk.
- Interfaz: Inter.
- Cifras y unidades: JetBrains Mono.

No se sustituirán por fuentes decorativas.

---

## 1.5 Inventario visual confirmado por las capturas

### 1.5.1 Estructura global

Las diez capturas confirman:

- barra lateral oscura permanente en escritorio;
- logotipo verde con rayo;
- nombre `PVPC AUDITOR` y subtítulo `Auditor Energético`;
- navegación vertical con iconos;
- sección activa sobre fondo azul grisáceo y borde lateral del color de la sección;
- fondo principal azul pizarra;
- tarjetas casi negras con bordes finos;
- márgenes amplios entre bloques;
- cifras grandes en tipografía monoespaciada;
- títulos secundarios en mayúsculas y tracking elevado;
- scroll vertical del contenido independiente de la barra lateral;
- pie lateral con estado y versión.

El texto `Modo Sin Nube` se eliminará en la versión final porque el acceso será obligatorio. El espacio inferior y la presentación de versión pueden conservarse.

### 1.5.2 Calculadora

Las capturas confirman:

- cabecera en tarjeta con título `Simulador Analítico de Suministro`;
- descripción breve;
- contador de días;
- acciones de guardado en la cabecera;
- dos columnas principales:
  - formulario ancho;
  - réplica de factura estrecha y sticky;
- bloque `Control de periodo e impuestos`;
- fechas, IVA, impuesto eléctrico y alerta límite en la misma fila;
- bloque de consulta de coste real;
- estado de éxito independiente con los precios P1, P2 y P3;
- bloque `Término fijo (potencias)`;
- potencia Punta y Valle visibles;
- acordeón de costes unitarios de potencia;
- bloque `Término variable`;
- tres columnas P1/P2/P3 con porcentaje;
- acordeón independiente para peajes y energía;
- dos filas diferentes de precios:
  - peajes de acceso en €/kWh;
  - coste de energía variable en €/kWh;
- Sandbox plegable al final;
- desglose completo en la columna derecha;
- total estimado anclado visualmente en la parte inferior.

### 1.5.3 Asesor IA

Las capturas confirman:

- la barra lateral global permanece visible;
- un segundo panel lateral corresponde a Fuentes;
- el panel de Fuentes puede plegarse;
- desplegado incluye:
  - encabezado `FUENTES DE DATOS`;
  - texto explicativo;
  - botón de plegado;
  - área de subida;
  - límite visible;
  - sección `DOCUMENTOS ACTIVOS`;
  - elemento `Conocimiento Base Global`;
- plegado se convierte en un raíl vertical, no desaparece por completo;
- la conversación ocupa el espacio restante;
- cabecera de contexto con punto violeta;
- mensaje inicial en tarjeta oscura;
- compositor fijo en la parte inferior;
- soporte visual para imagen, PDF, pegado y envío;
- el panel de Fuentes no es una navegación principal ni una pantalla separada.

### 1.5.4 Comparador

Las capturas confirman:

- cabecera en tarjeta;
- antetítulo ámbar `INTELIGENCIA DE DATOS`;
- título `Comparador de Tarifas Eléctricas`;
- contador de facturas utilizadas;
- gráfico histórico principal:
  - barras violetas para coste;
  - línea verde para consumo;
  - doble eje;
  - texto explicativo inferior;
- tarjetas de gasto medio y consumo energético;
- distribución P1/P2/P3 con barras;
- bloque de parámetros técnicos promedio;
- potencia media Punta y Valle;
- llamada a la acción de ancho completo con degradado ámbar-verde.

La composición se conserva, aunque la terminología y la lógica del análisis se corregirán.

### 1.5.5 Historial de facturas

Las capturas confirman:

- el árbol histórico se integra en la barra lateral;
- agrupación anual;
- importe y fecha secundaria en cada registro;
- scroll interno cuando hay varias facturas;
- cabecera `HISTORIAL DE REGISTROS`;
- selector superior de registro;
- tarjeta de detalle con:
  - fecha de creación;
  - distintivo de tipo;
  - título;
  - periodo auditado;
  - total;
  - IVA;
  - IEE;
  - acciones Cargar, Editar y Eliminar;
- tres tarjetas:
  - término fijo;
  - término variable;
  - coste de energía;
- gráfico de distribución en una tarjeta ancha inferior.

En la versión final, `Factura Oficial` se sustituirá por `Factura registrada`.

### 1.5.6 Historial de simulaciones

Las capturas confirman:

- grupo independiente `Simulaciones`;
- registros identificados por día;
- importe alineado a la derecha;
- tarjeta de detalle sin distintivo de factura;
- misma estructura de métricas, acciones y gráfico que las facturas;
- el tipo de registro se diferencia sin crear una pantalla distinta.

### 1.5.7 Elementos todavía no confirmados visualmente

Las capturas no muestran:

- versión móvil de la aplicación antigua;
- tema claro;
- estados de error;
- estados de carga;
- modales;
- formulario de edición;
- resultados completos del análisis de mercado;
- documentos reales añadidos al panel de Fuentes;
- panel de versiones;
- autenticación.

Estos elementos deben diseñarse sin contradecir la apariencia confirmada.

---

## 2. Navegación

### 2.1 Escritorio

Barra lateral fija con:

- marca `PVPC Auditor`;
- Calculadora;
- Asesor IA;
- Comparador;
- Historial;
- árbol de registros históricos;
- cuenta y sincronización;
- selector de tema, si se incorpora;
- cierre de sesión.

Se conserva la posibilidad de acceder directamente a registros desde la barra lateral, pero se corrige el acceso al Historial vacío.

### 2.2 Móvil

- cabecera superior compacta;
- barra inferior fija;
- Calculadora;
- Asesor IA;
- Comparador;
- Historial;
- cuenta mediante menú secundario.

Las capacidades móviles deben ser equivalentes a escritorio.

### 2.3 Rutas

Aunque la aplicación anterior cambia secciones sin modificar la URL, la modernización puede añadir rutas internas sin alterar la apariencia:

- `/calculadora`
- `/asesor`
- `/historial`
- `/comparador`
- `/ajustes`

La navegación debe conservar la velocidad y continuidad de la SPA.

---

## 3. Calculadora — definición funcional y visual

### 3.1 Regla de preservación

La Calculadora no puede reducirse a un formulario simplificado.

Debe conservar simultáneamente estos grupos:

1. Periodo.
2. Presupuesto.
3. IVA.
4. Impuesto eléctrico.
5. Sincronización de precios PVPC.
6. Potencia contratada.
7. Costes unitarios de potencia.
8. Consumo P1, P2 y P3.
9. Peajes de acceso por kWh.
10. Coste de energía por kWh.
11. Conceptos regulados.
12. Resultado y desglose.
13. Guardado.
14. Simulador de ahorro, solo cuando sea funcional.

### 3.2 Distinción obligatoria de precios

No se pueden mezclar ni sustituir estos conceptos:

#### Potencia contratada

- Potencia Punta: kW.
- Potencia Valle: kW.

#### Costes de potencia

- Peaje o coste de potencia Punta: €/kW/año.
- Peaje o coste de potencia Valle: €/kW/año.
- Margen comercial: €/kW/año.

#### Consumo

- Consumo P1 Punta: kWh.
- Consumo P2 Llano: kWh.
- Consumo P3 Valle: kWh.

#### Peajes de consumo

- Peaje P1: €/kWh.
- Peaje P2: €/kWh.
- Peaje P3: €/kWh.

#### Coste de energía

- Energía P1: €/kWh.
- Energía P2: €/kWh.
- Energía P3: €/kWh.

Un campo denominado `Precio anual Punta` no puede reemplazar a `Coste de energía Punta €/kWh`. Ambos pertenecen a partes diferentes de la factura.

### 3.3 Modo básico

El modo básico debe mostrar:

- fechas;
- días;
- presupuesto;
- IVA;
- impuesto eléctrico con valor estándar;
- potencia Punta y Valle;
- consumos Punta, Llano y Valle;
- botón de consulta PVPC;
- total y desglose resumido.

Los valores avanzados continúan formando parte del cálculo y se muestran como resumen plegado.

### 3.4 Modo avanzado

Debe exponer todos los parámetros de la aplicación anterior:

#### Costes unitarios de potencia

- P1 Punta €/kW/año.
- P2 o Valle €/kW/año según el contrato.
- Margen comercial €/kW/año.

#### Peajes y cargos de consumo

- P1 Punta €/kWh.
- P2 Llano €/kWh.
- P3 Valle €/kWh.

#### Costes de energía

- P1 Punta €/kWh.
- P2 Llano €/kWh.
- P3 Valle €/kWh.

#### Regulados e impuestos

- alquiler de contador €/día;
- financiación o bono social;
- impuesto eléctrico;
- IVA;
- otros conceptos documentados.

Cada campo mostrará:

- etiqueta completa;
- unidad;
- ayuda contextual;
- procedencia;
- fecha de vigencia;
- validación.

### 3.5 Distribución

La composición confirmada por las capturas es obligatoria en escritorio:

- cabecera superior en tarjeta;
- formulario ancho a la izquierda;
- réplica de factura estrecha a la derecha;
- réplica sticky durante el scroll;
- total visible al final del panel derecho;
- acordeones dentro del formulario, no en pantallas separadas.

Se conserva la estructura original:

- panel de entrada principal;
- resultado visible;
- acordeones técnicos;
- tarjetas oscuras;
- colores P1/P2/P3.

Se admite mejorar la composición con un resumen sticky, pero no alterar el orden lógico ni esconder parámetros tras múltiples pantallas.

### 3.6 Resultado

Debe mostrar:

- término fijo;
- peajes;
- energía;
- impuesto eléctrico;
- regulados;
- IVA;
- total;
- consumo total;
- coste medio;
- presupuesto excedido;
- gráfico.

Las cifras se obtienen exclusivamente del motor determinista.

### 3.7 Simulador de ahorro

El antiguo `Sandbox` no puede permanecer como control visual sin efecto.

Opciones admitidas:

1. Implementarlo y conectarlo al cálculo.
2. Mostrarlo desactivado con explicación temporal.
3. Retirarlo hasta que exista implementación real.

La opción recomendada es implementarlo en una fase posterior como `Simulador de ahorro`, conservando:

- traslado de consumo de Punta a Valle;
- reducción de potencia;
- impacto mensual y anual;
- botón para aplicar cambios;
- restauración de valores anteriores.

---

## 4. Asesor IA

### 4.1 Apariencia

Se conservan los dos estados confirmados del panel de Fuentes:

- desplegado como columna secundaria;
- plegado como raíl vertical persistente.

El estado de plegado debe mantenerse durante la sesión y la transición no debe modificar el historial del chat.

Se conserva el diseño anterior como base:

- panel de fuentes a la izquierda;
- conversación a la derecha;
- acento índigo;
- compositor fijo;
- mensajes densos y técnicos;
- citas.

Stitch se usa para mejorar:

- legibilidad;
- separación de estados;
- revisión de datos extraídos;
- móvil mediante pestañas `Chat` y `Fuentes`.

### 4.2 Fuentes

El documento original no se conservará después de analizarlo.

La fuente persistente mostrará:

- nombre original;
- fecha;
- estado;
- datos extraídos;
- procedencia;
- referencia a la factura guardada;
- aviso `Archivo original eliminado tras el análisis`.

### 4.3 Extracción

Se incorpora una pantalla o diálogo de revisión antes de aplicar datos.

No se mostrarán valores de ejemplo.

Si falla:

- se muestra error;
- se permite reintentar;
- se permite introducir datos manualmente;
- no se crea una fuente falsa.

### 4.4 Conversación

El Asesor debe recibir correctamente:

- datos de la factura seleccionada;
- resultados;
- consumo total;
- presupuesto;
- fuentes confirmadas;
- histórico seleccionado.

No debe enviar automáticamente todo el historial ni todos los documentos.

### 4.5 Texto de privacidad

No se afirmará que el análisis se realiza localmente.

Texto recomendado:

> El archivo se procesa de forma segura para extraer los datos seleccionados y se elimina al finalizar. Revisa que no contenga información personal innecesaria.

---

## 5. Historial

### 5.1 Apariencia

La barra lateral integra el árbol histórico. La cabecera de la vista incluye selector de registro y la ficha utiliza la composición confirmada en las capturas.

Se conserva:

- agrupación de facturas y simulaciones;
- navegación por años;
- detalle técnico;
- métricas;
- gráfico;
- acciones Cargar, Editar y Eliminar.

Se corrigen:

- acceso cuando está vacío;
- pérdida de decimales;
- selección al cancelar un borrado;
- confirmaciones;
- versiones;
- estados de sincronización.

### 5.2 Terminología

Se sustituye `Factura Oficial` por:

- `Factura registrada`, recomendada; o
- `Factura real`.

No se utilizará lenguaje que implique certificación.

### 5.3 Versiones

Cada registro mostrará:

- revisión actual;
- fecha;
- resumen de cambios;
- restauración;
- máximo de 20 versiones.

La versión actual debe seguir siendo visualmente simple; el historial de versiones se abre de forma secundaria.

---

## 6. Comparador

### 6.1 Apariencia

Se conserva la secuencia visual confirmada:

1. cabecera y contador;
2. gráfico histórico;
3. explicación;
4. tarjetas de medias;
5. parámetros técnicos;
6. llamada a la acción principal.

Se conserva:

- acento ámbar;
- gráfico histórico;
- tarjetas de gasto y consumo;
- potencias medias;
- ofertas;
- informe;
- fuentes.

### 6.2 Correcciones de lenguaje

No usar:

- `mejor tarifa` sin matices;
- `ahorrarás`;
- `ganadora`;
- `recomendación definitiva`.

Usar:

- `menor coste estimado entre ofertas verificadas`;
- `diferencia estimada`;
- `análisis orientativo`;
- `datos verificados por el usuario`.

### 6.3 Ofertas

Cada oferta debe mostrar:

- comercializadora;
- nombre;
- precios;
- fecha de consulta;
- fuente;
- estado de verificación;
- permanencia;
- servicios;
- coste calculado;
- conceptos incluidos y excluidos.

La búsqueda automática no puede incorporar una oferta sin revisión.

### 6.4 Cálculo

La IA localiza y estructura datos. El motor determinista calcula.

El ahorro se compara contra el perfil actual del usuario, no contra la oferta más cara.

---

## 7. Cuenta, sincronización y ajustes

La antigua etiqueta `Modo Sin Nube` desaparece porque el acceso será obligatorio.

Se incorpora una zona de cuenta discreta:

- nombre;
- correo;
- estado sincronizado;
- última sincronización;
- ajustes;
- copias;
- cerrar sesión.

No se mostrará `Premium Access`.

---

## 8. Tema claro

La estética oscura es la principal y debe quedar terminada primero.

El tema claro se añadirá después sin alterar:

- jerarquía;
- densidad;
- significado cromático;
- estructura.

No se debe rediseñar la aplicación para encajar el tema claro.

---

## 9. Responsive

### Escritorio

- sidebar fija;
- ancho de contenido limitado;
- tarjetas densas;
- resultado visible;
- Asesor en dos paneles;
- Historial en lista y detalle.

### Móvil

- controles de 44 px;
- una columna;
- acordeones;
- resumen de factura arriba;
- Asesor por pestañas;
- Historial lista/detalle;
- Comparador en tarjetas;
- navegación inferior.

### Tableta

- sidebar plegable;
- dos columnas cuando sea útil;
- no usar la misma composición de escritorio reducida.

---

## 10. Accesibilidad

- contraste AA;
- foco visible;
- etiquetas asociadas;
- Escape en modales;
- trampa de foco;
- calendario con teclado;
- unidades anunciadas;
- errores textuales;
- gráficos con resumen;
- reducción de movimiento;
- idioma español;
- título correcto;
- no depender solo del color.

---

## 11. Matriz de preservación

| Elemento antiguo | Decisión V2 |
|---|---|
| Navegación lateral | Conservar |
| Navegación inferior móvil | Conservar |
| Tema oscuro técnico | Conservar |
| Densidad alta | Conservar |
| Potencia Punta/Valle | Conservar |
| Costes €/kW/año | Conservar |
| Peajes €/kWh P1/P2/P3 | Conservar |
| Energía €/kWh P1/P2/P3 | Conservar |
| Presupuesto | Conservar |
| IVA e impuesto eléctrico | Conservar y validar |
| Consulta PVPC | Conservar, sin estimación |
| Simulación y factura | Conservar, cambiar terminología |
| Historial agrupado | Conservar y corregir |
| Panel de fuentes | Conservar |
| Chat | Conservar y corregir contexto |
| Comparador | Conservar y corregir fórmulas |
| Sandbox sin efecto | No conservar como falso control |
| Modo local | Eliminar |
| Premium Access | Eliminar |
| Fallback de factura ficticia | Eliminar |
| Textos de exactitud falsa | Eliminar |

---

## 12. Criterios visuales de aceptación

1. Un usuario de la aplicación anterior reconoce inmediatamente la nueva.
2. Ningún campo técnico desaparece.
3. La Calculadora avanzada muestra simultáneamente €/kW/año y €/kWh.
4. La navegación conserva ubicación y colores.
5. No se produce un rediseño genérico de dashboard.
6. Las mejoras de Stitch son localizadas.
7. El móvil conserva todas las capacidades.
8. No aparecen `Modo Sin Nube`, `Premium Access` ni `Factura Oficial`.
9. Los estados de procedencia son visibles.
10. El Sandbox no aparenta funcionar si no está conectado.
11. Las correcciones no reducen densidad de información.
12. La accesibilidad no cambia la identidad visual.

---

## 13. Prompt maestro visual para Google AI Studio

```text
Usa el repositorio existente de PVPC Auditor como referencia visual y funcional principal. No rediseñes la aplicación desde cero.

OBJETIVO
Crear una evolución conservadora de la aplicación anterior. Debe reconocerse como la misma aplicación, con su tema oscuro técnico, navegación lateral, navegación móvil, densidad, acordeones, colores por sección y disposición general.

REGLAS DE PRESERVACIÓN
- No elimines campos.
- No sustituyas parámetros diferentes por un único campo.
- La Calculadora avanzada debe conservar:
  - potencia Punta y Valle en kW;
  - costes de potencia Punta, Valle y margen en €/kW/año;
  - consumo P1, P2 y P3 en kWh;
  - peajes P1, P2 y P3 en €/kWh;
  - coste de energía P1, P2 y P3 en €/kWh;
  - alquiler, bono social, impuesto eléctrico e IVA.
- No conviertas la interfaz en un dashboard genérico.
- No uses Stitch como sustitución completa; úsalo solo para accesibilidad, responsive y claridad.
- Conserva verde en Calculadora, índigo en Asesor y ámbar en Comparador.
- Conserva Inter, Space Grotesk y JetBrains Mono.
- No añadas Premium Access.
- No muestres Modo local.
- Cambia Factura Oficial por Factura registrada.
- No afirmes que la IA procesa localmente.
- No presentes estimaciones como exactas.
- No muestres controles sin efecto.

Antes de modificar:
1. inspecciona todo el código;
2. inventaría pantallas, campos y acciones;
3. indica qué conservarás;
4. detalla los cambios visuales previstos;
5. no edites hasta finalizar ese inventario.

Tras editar:
- verifica escritorio y móvil;
- compara con el estado anterior;
- enumera cualquier campo o acción modificada;
- detente si detectas pérdida funcional.
```

---

## 14. Cambios respecto a V2

- Las diez capturas reales pasan a ser la referencia visual principal de escritorio.
- Se documentan por separado Calculadora, Asesor, Comparador, facturas y simulaciones.
- Se confirma el panel de Fuentes desplegable y su estado de raíl vertical.
- Se confirma la réplica de factura sticky.
- Se confirma el árbol histórico integrado en la barra lateral.
- Se confirma la composición completa del Comparador.
- Se declara expresamente que no hay capturas móviles antiguas.
- La aplicación antigua pasa a ser la referencia visual principal.
- Stitch pasa a ser referencia secundaria.
- Se prohíbe simplificar la Calculadora.
- Se aclara la coexistencia de €/kW/año y €/kWh.
- Se conserva la densidad anterior.
- Se sustituye el rediseño total por mejoras localizadas.
- Se define el tratamiento del antiguo Sandbox.
- Se incorporan correcciones de terminología y privacidad.
