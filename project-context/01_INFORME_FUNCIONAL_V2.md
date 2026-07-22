# Informe funcional y de estado — PVPC Auditor V2

## 0. Control documental

| Campo | Contenido |
|---|---|
| Proyecto | PVPC Auditor |
| Producto analizado | PVPC Auditor V4 |
| Documento | Informe funcional y de estado de la aplicación |
| Versión | V2 |
| Estado | Vigente |
| Fecha | 22 de julio de 2026 |
| Sustituye a | `Informe funcional PVPC Auditor V1.md` |
| Fuentes revisadas | `PVPC Auditor V1.md` e `Informe funcional PVPC Auditor V1.md` |

## 1. Cambios respecto a la versión anterior

Esta versión conserva la descripción funcional de V1 y añade una clasificación más precisa del estado real de cada capacidad.

Cambios principales:

- separación entre funciones operativas, funciones condicionadas por servicios externos y elementos no operativos;
- incorporación del estado técnico comprobado de compilación y ejecución;
- descripción más precisa de las limitaciones del cálculo, el asistente, el escáner y el comparador;
- ampliación del análisis de almacenamiento, sincronización, seguridad, accesibilidad y fiabilidad;
- definición más clara del grado de madurez actual del producto;
- identificación de los riesgos que impiden presentar la aplicación como auditoría oficial o comparador contractual definitivo.

## 2. Resumen ejecutivo

**PVPC Auditor es una aplicación web de análisis energético personal centrada en las facturas eléctricas españolas y, especialmente, en la tarifa regulada PVPC.**

Integra en una única interfaz cuatro áreas principales:

1. cálculo y simulación de facturas;
2. asesor energético con inteligencia artificial;
3. historial de simulaciones y facturas;
4. comparación orientativa de tarifas.

La aplicación permite introducir o extraer datos de una factura, calcular su importe, guardar resultados, revisar la evolución histórica, formular preguntas y obtener comparaciones de mercado.

El producto analizado es funcional y contiene un conjunto amplio de capacidades. Sin embargo, su estado actual no permite considerar fiables todos los resultados externos o automatizados. Algunas respuestas dependen de servicios no verificados y varios mecanismos de respaldo generan estimaciones o datos predefinidos sin distinguirlos suficientemente de información real.

Por tanto, PVPC Auditor debe presentarse actualmente como **herramienta de simulación, comprensión y orientación**, no como:

- auditoría oficial de una factura;
- certificación de precios PVPC;
- recomendación contractual independiente;
- comparador comercial actualizado en tiempo real.

## 3. Problema que pretende resolver

Una factura eléctrica española combina conceptos que suelen resultar difíciles de interpretar: potencia contratada, consumo por periodos, peajes, coste de energía, impuestos, alquiler de contador y otros cargos regulados.

PVPC Auditor intenta reducir esa complejidad mediante una herramienta que permite:

- reproducir aproximadamente el cálculo de una factura;
- comprobar qué conceptos explican el importe final;
- simular cambios de consumo, potencia, precios e impuestos;
- conservar facturas y simulaciones para comparar su evolución;
- extraer datos de documentos mediante inteligencia artificial;
- recibir explicaciones en lenguaje natural;
- contrastar el perfil de consumo con distintas tarifas.

Su propuesta de valor consiste en reunir cálculo, archivo, análisis documental, conversación y comparación en una sola aplicación.

## 4. Usuarios previstos

### 4.1 Usuario principal

El usuario principal, inferido por las funciones existentes, es un consumidor doméstico o pequeño consumidor eléctrico que desea comprender, revisar o simular su factura.

La aplicación puede ser útil para personas que:

- tienen o están evaluando una tarifa PVPC;
- quieren comprobar la coherencia aproximada de una factura;
- desean conocer el peso del consumo punta, llano y valle;
- valoran reducir potencia o trasladar consumo a otros periodos;
- quieren conservar un histórico personal;
- buscan una primera orientación sobre tarifas alternativas.

### 4.2 Roles y permisos

No se ha identificado un sistema de roles funcionales diferenciados.

Existen únicamente dos situaciones de uso:

- **usuario local sin cuenta**, cuyos datos permanecen en el navegador;
- **usuario autenticado con Google**, cuando Firebase está configurado, con posibilidad de sincronización en la nube.

No existe panel de administración, rol de gestor, acceso empresarial, gestión de comunidades ni supervisión de varios usuarios.

## 5. Organización de la aplicación

La aplicación funciona como una página única y cambia de sección sin cargar páginas independientes.

Sus cuatro vistas principales son:

- **Calculadora**
- **Asesor IA**
- **Historial**
- **Comparador**

En escritorio utiliza una barra lateral. En dispositivos móviles utiliza una cabecera superior y una barra de navegación inferior.

El diseño utiliza un tema oscuro y diferencia las áreas mediante colores de acento. La estructura responsive está implementada en el código, pero no se pudo verificar visualmente en navegadores reales durante la auditoría.

## 6. Calculadora y simulador de factura

### 6.1 Datos introducidos

La calculadora permite configurar:

- fecha inicial y final del periodo;
- presupuesto máximo;
- potencia contratada punta y valle;
- precios anuales de potencia;
- margen de comercialización;
- consumo en punta, llano y valle;
- peajes de cada periodo;
- coste de energía de cada periodo;
- alquiler diario del contador;
- financiación o bono social;
- impuesto eléctrico;
- IVA del 21 % o del 10 %.

### 6.2 Cálculo y resultado

Cada modificación recalcula inmediatamente la factura. El resultado se divide en:

- término fijo de potencia;
- peajes;
- coste de energía;
- impuesto eléctrico;
- conceptos regulados;
- IVA;
- total final.

También muestra una alerta cuando el total supera el presupuesto configurado y una representación gráfica del reparto del gasto.

### 6.3 Utilidad práctica

El usuario puede probar escenarios como:

- reducir potencia contratada;
- modificar los consumos por periodo;
- cambiar el coste de energía;
- aplicar otro tipo de IVA;
- analizar el impacto del impuesto eléctrico;
- comprobar si el total supera un límite personal.

### 6.4 Limitaciones confirmadas del cálculo

El motor calcula la diferencia entre fechas sin incluir completamente el último día. Por ejemplo, del 1 al 30 de junio se contabilizan 29 días. Esta regla puede producir discrepancias frente a facturas que consideran el periodo de forma inclusiva.

Los campos principales no imponen límites suficientes en el navegador. En modo local pueden introducirse valores negativos o extremos y la aplicación los utiliza en las fórmulas.

Los resultados se calculan con precisión interna y se redondean al mostrarse. En determinados límites, la alerta de presupuesto puede depender del importe no redondeado y diferir de lo que parece indicar el total visible.

### 6.5 Sincronización o estimación PVPC

La aplicación intenta obtener precios de energía para el periodo seleccionado mediante tres niveles sucesivos:

1. consulta a REE;
2. búsqueda asistida por inteligencia artificial;
3. algoritmo estacional de respaldo.

Si se obtiene una respuesta, se actualizan los costes de energía punta, llano y valle.

Esta función no debe considerarse una certificación del precio PVPC. La conexión real con REE y las respuestas reales de Gemini no fueron verificadas. Además, el algoritmo de respaldo puede presentarse en la interfaz como cálculo “real y exacto”, aunque sea una estimación.

### 6.6 Guardado

La calculadora permite guardar el estado como:

- **simulación**, destinada a pruebas o escenarios;
- **factura oficial**, utilizada posteriormente por el comparador.

Una simulación conserva los datos y resultados. En almacenamiento local, una nueva simulación del mismo día sustituye a la anterior.

Para guardar una factura oficial se solicita una referencia de mes y año, pero no se valida de forma estricta que el texto corresponda realmente a un mes y año válidos.

### 6.7 Elemento no operativo

La sección visual denominada sandbox contiene controles deslizantes, pero estos no están conectados al cálculo. Su manipulación no altera los resultados. Debe considerarse una interfaz incompleta, no una funcionalidad disponible.

## 7. Asesor energético con inteligencia artificial

### 7.1 Conversación

El asesor permite formular preguntas sobre:

- ahorro;
- potencia contratada;
- distribución del consumo;
- interpretación de la factura;
- diferencias entre tarifas;
- documentos cargados.

Admite texto e imágenes, conserva la conversación y puede mostrar citas cuando utiliza búsqueda web.

### 7.2 Fuentes y documentos

El usuario puede cargar imágenes y archivos PDF. Estos documentos se incorporan al panel de fuentes y pueden utilizarse como contexto para el chat.

Las fuentes pueden seleccionarse y eliminarse. La eliminación no requiere confirmación previa.

### 7.3 Escaneo de facturas

El sistema intenta extraer de una factura:

- fechas;
- potencia punta y valle;
- consumos punta, llano y valle;
- coste total;
- posible identificación de tarifa PVPC;
- explicación de la lectura.

Después permite conservar la lectura únicamente como contexto o trasladar los datos a la calculadora.

### 7.4 Limitaciones críticas del escáner

Si el servicio de inteligencia artificial falla, el servidor puede devolver una factura de ejemplo predefinida con respuesta satisfactoria. La interfaz puede mostrarla como si hubiera sido extraída del documento real.

Esto supone el principal riesgo funcional del escáner: **datos ficticios pueden confundirse con datos detectados**.

Además:

- el IVA no se extrae realmente y el cliente asigna un 21 % por defecto;
- determinados valores cero pueden ser sustituidos por valores predeterminados;
- no existe una comprobación sólida de que el contenido detectado coincida con el documento original.

Hasta que estas deficiencias se corrijan, los datos escaneados deben revisarse manualmente antes de cargarlos o guardarlos.

### 7.5 Limitaciones del chat

El flujo actual no transmite correctamente al asistente algunos resultados calculados, entre ellos el total de la factura y el consumo total. En determinadas respuestas de respaldo, el asistente puede mostrar importes o consumos iguales a cero aunque la calculadora tenga información.

El servidor dispone de varios modos internos de respuesta, pero la interfaz activa no permite al usuario seleccionarlos. La búsqueda web se activa automáticamente al detectar determinadas palabras.

## 8. Historial

El historial almacena y separa:

- facturas oficiales;
- simulaciones.

Las facturas oficiales se agrupan por año y mes. Las simulaciones aparecen en un bloque independiente.

Para cada entrada se pueden consultar:

- fecha o referencia;
- importe total;
- potencia;
- consumo por periodos;
- costes energéticos;
- gráfico de distribución.

El usuario puede:

- cargar una entrada en la calculadora;
- editarla;
- recalcularla;
- eliminarla.

La carga solicita confirmación antes de sustituir los datos actuales. El borrado también utiliza confirmación.

Limitaciones conocidas:

- el editor del historial puede eliminar los decimales de los consumos;
- cancelar un borrado puede dejar seleccionada otra entrada;
- en escritorio, el acceso al historial vacío no resulta completamente coherente;
- las fechas y marcas temporales no se gestionan de forma homogénea entre almacenamiento local y nube.

## 9. Comparador de tarifas

### 9.1 Requisito previo

El comparador necesita al menos una factura guardada como oficial. Las simulaciones no se utilizan para elaborar el perfil medio.

### 9.2 Información presentada

La sección muestra:

- evolución histórica del coste;
- evolución del consumo;
- gasto medio;
- consumos medios punta, llano y valle;
- potencias medias;
- análisis de ofertas.

### 9.3 Análisis de mercado

La aplicación intenta obtener una comparación mediante inteligencia artificial y búsqueda web. Si no es posible, utiliza un cálculo interno con varias tarifas y precios predefinidos.

El resultado puede incluir:

- oferta recomendada;
- coste mensual estimado;
- ahorro anual;
- ventajas e inconvenientes;
- enlaces;
- explicación y citas.

### 9.4 Limitaciones críticas del comparador

El comparador actual es orientativo por varias razones:

- calcula medias por factura sin normalizar todos los periodos a una duración común;
- el modo de respaldo utiliza precios incorporados al código y puede quedar desactualizado;
- el IVA del cálculo de respaldo está fijado al 10 %;
- el ahorro anual de respaldo compara la oferta más cara con la más barata, no la tarifa actual del usuario con la recomendada;
- la respuesta generada mediante inteligencia artificial no se valida completamente antes de mostrarla;
- no se comprobó la actualidad comercial de las ofertas.

No debe emplearse como base única para contratar o cambiar una tarifa.

## 10. Almacenamiento y sincronización

### 10.1 Modo local

Sin iniciar sesión, la aplicación almacena en el navegador:

- datos actuales de la calculadora;
- historial;
- fuentes y documentos;
- conversación.

Este modo permite utilizar la mayor parte del producto sin crear una cuenta.

Riesgos del almacenamiento local:

- pérdida al borrar los datos del navegador;
- ausencia de copias de seguridad;
- posible agotamiento de espacio por imágenes;
- datos corruptos que pueden impedir iniciar correctamente la aplicación;
- ausencia de tratamiento visible de algunos errores de almacenamiento.

### 10.2 Sincronización en la nube

La aplicación incluye autenticación con Google y sincronización mediante Firebase. Esta capacidad estaba desactivada en la configuración auditada porque faltaban los datos de configuración.

Cuando existen datos en la nube, estos pueden sustituir por completo a los datos locales. No existe una combinación avanzada de cambios, control de versiones ni resolución de conflictos entre dispositivos.

Por tanto, la sincronización cloud está implementada conceptualmente, pero no debe considerarse validada para producción.

## 11. Seguridad y privacidad

### 11.1 Datos tratados

La aplicación puede almacenar:

- consumos y potencias eléctricas;
- importes de facturas;
- fechas de facturación;
- documentos e imágenes de facturas;
- conversaciones;
- identidad de Google, si se activa Firebase.

Las facturas pueden contener nombre, dirección, CUPS, número de contrato y otros datos personales. El producto debe tratar estos documentos como información sensible.

### 11.2 Riesgos confirmados

Los endpoints del servidor destinados a inteligencia artificial y análisis no incorporan autenticación ni limitación de peticiones. Un tercero con acceso al servicio podría generar consumo de recursos o costes externos.

El servidor admite cuerpos de hasta 50 MB, pero no aplica una validación suficientemente estricta de tipo, contenido o tamaño en todos los flujos.

No se identificaron cabeceras de seguridad, política CSP, limitación de origen ni endurecimiento HTTP específico.

Las reglas de Firestore contienen validaciones parciales y permiten determinados campos o modificaciones que la documentación de seguridad pretendía impedir.

### 11.3 Estado de cumplimiento

No existe evidencia suficiente para afirmar cumplimiento completo con RGPD ni con una política formal de privacidad. Antes de un uso público deberían definirse:

- información legal y consentimiento;
- finalidad del tratamiento;
- conservación y borrado;
- gestión de documentos subidos;
- eliminación de cuenta;
- proveedores externos y transferencias;
- registro de incidencias y medidas de seguridad.

## 12. Experiencia de usuario y accesibilidad

La aplicación está diseñada para móvil, tableta y escritorio. Incluye estados de carga, mensajes de error, confirmaciones y resultados gráficos.

Funciones de teclado comprobadas en el código:

- Enter para guardar una factura oficial;
- Enter para enviar mensajes;
- Shift + Enter para introducir una nueva línea;
- cierre del calendario mediante clic exterior.

Limitaciones:

- varios modales no se cierran con Escape;
- el calendario no ofrece navegación completa mediante teclado;
- no se confirmó la gestión correcta del foco;
- existen controles visuales sin efecto real;
- el documento HTML declara idioma inglés y utiliza un título genérico;
- no se realizó una prueba visual real en navegadores.

La accesibilidad debe considerarse parcial y no validada.

## 13. Estado técnico comprobado

La auditoría confirmó:

- revisión de los 29 archivos versionados;
- compilación satisfactoria del frontend y servidor;
- arranque satisfactorio del servidor de producción;
- respuesta HTTP correcta de la página principal;
- funcionamiento de los mecanismos locales de respaldo de PVPC, mercado, escáner y chat;
- ausencia de errores TypeScript con la configuración oficial.

También confirmó:

- instalación reproducible con `npm ci` fallida por desincronización del archivo de dependencias;
- ausencia de una suite real de pruebas automatizadas;
- tamaño elevado del paquete JavaScript principal;
- componentes completos existentes pero no utilizados;
- imposibilidad de realizar control visual real en navegador durante la auditoría.

La aplicación puede compilarse y ejecutarse, pero el proceso de instalación, las pruebas y la validación de producción todavía necesitan consolidación.

## 14. Clasificación del estado funcional

### 14.1 Operativo y comprobado

- cálculo local de factura;
- recálculo inmediato;
- alerta de presupuesto;
- guardado local de datos;
- creación y consulta de historial;
- edición, carga y borrado de entradas;
- gráficos de factura e histórico;
- navegación entre las cuatro secciones;
- servidor de producción y respuestas de respaldo.

### 14.2 Implementado pero condicionado o no verificado

- consulta real a REE;
- respuestas reales de Gemini;
- búsqueda web y citas del asistente;
- extracción real de facturas;
- comparación actualizada de tarifas;
- autenticación con Google;
- sincronización Firebase;
- funcionamiento visual completo en navegadores y dispositivos reales.

### 14.3 Implementado con resultados potencialmente engañosos

- estimación PVPC presentada como exacta;
- factura ficticia de respaldo del escáner mostrada como análisis realizado;
- IVA de factura escaneada fijado al 21 %;
- contexto incompleto del chat;
- ahorro anual del comparador calculado con una referencia incorrecta;
- precios comerciales de respaldo posiblemente desactualizados.

### 14.4 No operativo

- sandbox de controles deslizantes;
- componentes alternativos de optimizador, chat y escáner que existen en el repositorio, pero no están conectados a la aplicación visible.

## 15. Evaluación del producto

### 15.1 Fortalezas

- integra varias funciones útiles en una sola herramienta;
- permite trabajar sin cuenta;
- ofrece cálculo inmediato y explicaciones visuales;
- conserva un histórico personal;
- conecta documentos, conversación y calculadora;
- presenta una base válida para evolucionar hacia un producto energético especializado.

### 15.2 Debilidades

- no diferencia suficientemente datos reales, estimaciones y plantillas de respaldo;
- algunas fórmulas y referencias del comparador no representan el ahorro real del usuario;
- existen inconsistencias en fechas, impuestos, sincronización y contexto de IA;
- no hay validación integral de datos;
- las APIs externas están insuficientemente protegidas;
- no hay pruebas automatizadas ejecutables;
- la sincronización y el comportamiento visual no están validados en producción.

### 15.3 Grado de madurez

PVPC Auditor se encuentra en un estado de **prototipo funcional avanzado o versión beta técnica**.

La base funcional es amplia y demostrable, pero todavía no reúne las garantías necesarias para ofrecer públicamente conclusiones económicas como exactas. El principal problema no es la ausencia de funciones, sino la fiabilidad, trazabilidad y comunicación del origen de los datos.

## 16. Conclusión

PVPC Auditor es una aplicación web orientada a ayudar al usuario a comprender y explorar su factura eléctrica.

Sus cuatro pilares son:

- calcular y simular;
- guardar y revisar;
- preguntar y escanear;
- comparar y orientar decisiones.

La calculadora y el historial local constituyen actualmente las áreas más sólidas. El asesor, el escáner, la sincronización PVPC y el comparador añaden valor, pero dependen de integraciones o mecanismos de respaldo que todavía presentan riesgos importantes.

La aplicación tiene una propuesta de producto coherente y una base técnica aprovechable. Antes de considerarla apta para uso público fiable, debería priorizar:

1. distinguir explícitamente datos reales, estimados y de demostración;
2. corregir el escáner y el contexto del chat;
3. revisar las fórmulas y referencias del comparador;
4. endurecer seguridad y validación de APIs;
5. consolidar almacenamiento y sincronización;
6. incorporar pruebas automatizadas y validación visual real;
7. mejorar accesibilidad y textos legales.

Hasta entonces, debe presentarse como herramienta de apoyo y simulación, no como auditoría oficial ni recomendación contractual definitiva.

## 17. Historial de versiones

| Versión | Fecha | Estado | Resumen |
|---|---|---|---|
| V1 | 22 de julio de 2026 | Sustituida | Primera descripción funcional completa de PVPC Auditor V4. |
| V2 | 22 de julio de 2026 | Vigente | Informe funcional y de estado con clasificación de capacidades, riesgos y madurez. |
