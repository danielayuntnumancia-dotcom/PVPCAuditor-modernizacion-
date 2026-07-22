# Arquitectura e Implementación — PVPC Auditor

**Proyecto:** PVPC Auditor  
**Documento:** Arquitectura, implementación y modernización conservadora  
**Versión:** V3  
**Fecha:** 22 de julio de 2026  
**Estado:** Vigente para clonar y modernizar el repositorio existente  
**Sustituye a:** `Arquitectura e Implementación PVPC Auditor V2.md`  
**Planificación utilizada:** `Informe funcional PVPC Auditor V2.md`  
**Diseño utilizado:** `Diseño y Prototipado PVPC Auditor V3.md`  
**Código analizado:** `PVPCAuditor-v4-main.zip`  
**Referencia técnica histórica:** `PVPC Auditor V1.md`  

---

## 0. Control de fuentes

### 0.1 Fuentes vigentes

1. Instrucción actual del usuario: clonar funcional y visualmente la aplicación anterior e incorporar las correcciones aprobadas.
2. `Informe funcional PVPC Auditor V2.md`.
3. `Diseño y Prototipado PVPC Auditor V3.md`.
4. `PVPCAuditor-v4-main.zip`.
5. Diez capturas reales de Calculadora, Asesor, Comparador, historial de facturas e historial de simulaciones.
6. `PVPC Auditor V1.md`.
7. Decisiones del cuestionario técnico.
8. Imágenes de Stitch como referencia secundaria y móvil.

### 0.2 Versiones sustituidas

- `Diseño y Prototipado PVPC Auditor V1.md` queda como historial.
- `Arquitectura e Implementación PVPC Auditor V1.md` queda como historial porque proponía una reconstrucción desde cero y cambio inmediato a Next.js.

### 0.3 Estado comprobado del repositorio

El ZIP contiene:

- React;
- TypeScript;
- Vite;
- Express;
- Tailwind;
- Recharts;
- Firebase;
- Gemini;
- reglas Firestore;
- frontend y backend;
- calculadora;
- asesor;
- historial;
- comparador.

El repositorio anterior contiene funciones útiles, pero también defectos conocidos. No se considera una base lista para producción.

### 0.4 Cambio de estrategia

La V2 adopta una estrategia de **refactorización evolutiva**, no una reescritura.

Principios:

1. Importar el repositorio.
2. Conseguir una instalación reproducible.
3. Verificar el comportamiento actual.
4. Crear pruebas de caracterización.
5. Congelar la apariencia y las funcionalidades válidas.
6. Corregir defectos en fases pequeñas.
7. Modularizar solo cuando exista cobertura.
8. Añadir autenticación y persistencia sin destruir flujos.
9. No migrar de framework mientras haya funcionalidades sin caracterizar.

### 0.5 Conflicto de despliegue

La V1 seleccionaba Firebase App Hosting con Next.js.

La aplicación existente utiliza React + Vite + Express. Reescribirla inmediatamente en Next.js aumenta el riesgo de repetir la pérdida funcional detectada.

**Decisión V2 recomendada:**

- conservar React + Vite + Express durante la modernización;
- desplegar el frontend mediante Firebase Hosting;
- desplegar el backend Express en Cloud Run;
- usar rewrites de Firebase Hosting hacia Cloud Run;
- mantener integración continua desde GitHub.

Firebase App Hosting puede reconsiderarse después de estabilizar la aplicación o mediante un adaptador compatible. No debe condicionar la primera modernización.

### 0.6 Línea base visual comprobada

Las capturas reales constituyen la referencia visual de regresión para escritorio. La Fase 0 debe conservar:

- barra lateral global;
- árbol del Historial en la barra lateral;
- colores de sección;
- cabecera y réplica sticky de la Calculadora;
- acordeones y totalidad de campos;
- panel de Fuentes del Asesor en estado desplegado y plegado;
- compositor inferior;
- gráfico y tarjetas del Comparador;
- ficha de detalle y gráfico del Historial.

Se crearán capturas de regresión con los mismos estados y dimensiones aproximadas. No se considerará verificada la clonación solo porque el código compile.

Las imágenes no prueban el comportamiento móvil. Para móvil se mantendrá el código existente hasta disponer de pruebas y se contrastará con Stitch.

---

## 1. Resumen ejecutivo

La nueva versión no se construirá desde cero. Se evolucionará el repositorio anterior mediante el patrón **Strangler Fig interno**:

- la interfaz y los flujos existentes continúan operativos;
- las funciones críticas se extraen progresivamente a módulos nuevos;
- cada módulo antiguo se sustituye solo después de disponer de pruebas;
- las correcciones se aplican de forma reversible;
- no se permite una reescritura global de `App.tsx`.

Se conservará inicialmente el stack:

- React;
- TypeScript;
- Vite;
- Express;
- Tailwind;
- Recharts;
- Firebase SDK;
- Gemini SDK.

Se incorporarán:

- TypeScript estricto;
- validación Zod;
- aritmética decimal;
- pruebas;
- autenticación obligatoria;
- aislamiento por usuario;
- Firestore con versiones;
- backend seguro;
- extracción sin datos ficticios;
- PVPC sin estimaciones;
- comparador determinista;
- exportación y copias.

---

## 2. Alcance de la modernización

### 2.1 Funcionalidad que debe conservarse

- navegación entre Calculadora, Asesor, Historial y Comparador;
- responsive;
- tema oscuro;
- Calculadora completa;
- todos los campos de potencia;
- todos los campos de peajes;
- todos los costes de energía;
- impuestos;
- regulados;
- presupuesto;
- recálculo inmediato;
- guardado;
- historial;
- gráficos;
- documentos;
- chat;
- citas;
- comparador;
- Google Sign-In existente como base conceptual.

### 2.2 Funcionalidad que debe corregirse

- días no inclusivos;
- campos sin límites;
- redondeos inconsistentes;
- peajes P2/P3;
- fallback PVPC presentado como exacto;
- factura ficticia del escáner;
- IVA fijado al 21 % en extracción;
- ceros sustituidos por defaults;
- contexto incompleto del chat;
- comparador con IVA fijo;
- ahorro contra oferta incorrecta;
- ofertas sin validación;
- sincronización cloud-wins;
- timestamps;
- borrado sin confirmación;
- pérdida de decimales;
- acceso al Historial vacío;
- modales y teclado;
- APIs públicas;
- límite de archivo;
- reglas Firestore;
- package-lock;
- bundle;
- componentes residuales.

### 2.3 Funcionalidad nueva aprobada

- cuenta Google obligatoria;
- allowlist inicial de una cuenta;
- multiusuario preparado;
- datos independientes;
- últimas 20 versiones;
- conflictos;
- copia automática diaria configurable;
- exportación manual;
- borrado del archivo original;
- revisión de extracción;
- búsqueda automática más entrada manual;
- tema claro posterior.

---

## 3. Estrategia de código

### 3.1 Estado inicial

La aplicación concentra gran parte de la lógica y la interfaz en `src/App.tsx`.

No debe dividirse en una única operación.

### 3.2 Extracción progresiva

Orden recomendado:

1. `domain/billing`.
2. `features/calculator`.
3. `features/history`.
4. `features/auth`.
5. `server/middleware`.
6. `server/integrations`.
7. `features/advisor`.
8. `features/comparator`.
9. `features/backups`.
10. layouts y navegación.

### 3.3 Estructura objetivo compatible con Vite

```text
src/
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   └── providers/
├── components/
│   ├── ui/
│   ├── charts/
│   └── layout/
├── features/
│   ├── calculator/
│   ├── history/
│   ├── advisor/
│   ├── comparator/
│   ├── auth/
│   ├── settings/
│   └── backups/
├── domain/
│   ├── billing/
│   ├── tariffs/
│   ├── versioning/
│   └── shared/
├── data/
│   ├── firestore/
│   └── repositories/
├── lib/
│   ├── firebase.ts
│   ├── validation.ts
│   └── http.ts
├── styles/
└── test/

server/
├── index.ts
├── middleware/
├── routes/
├── services/
├── repositories/
├── integrations/
└── validation/
```

Durante la transición, `server.ts` puede permanecer como entrada y delegar en módulos.

---

## 4. Stack

| Capa | Tecnología V2 | Decisión |
|---|---|---|
| Frontend | React + TypeScript + Vite | Conservar |
| Backend | Express + TypeScript | Conservar y modularizar |
| Estilos | Tailwind + CSS | Conservar |
| Gráficos | Recharts | Conservar |
| Formularios | React Hook Form | Añadir progresivamente |
| Validación | Zod | Añadir |
| Decimal | Decimal.js o equivalente | Añadir al dominio |
| Auth | Firebase Authentication Google | Activar y endurecer |
| Datos | Cloud Firestore | Rediseñar modelo |
| Archivos temporales | Memoria/efímero | Sin persistencia |
| Copias | Cloud Storage | Añadir |
| Programación | Cloud Functions v2 | Añadir |
| IA | `@google/genai` desde servidor | Conservar y asegurar |
| Frontend hosting | Firebase Hosting | Recomendado |
| Backend hosting | Cloud Run | Recomendado |
| CI | GitHub Actions | Añadir |
| Tests | Vitest, Testing Library, Playwright, Emulator Suite | Añadir |

### 4.1 Dependencias

Antes de cualquier otra modificación:

- regenerar `package-lock.json`;
- elegir npm como gestor único;
- eliminar o justificar `bun.lock`;
- fijar una versión de Node soportada;
- añadir `engines`;
- eliminar dependencias no utilizadas;
- no actualizar todas las dependencias simultáneamente.

---

## 5. Motor de cálculo

### 5.1 Campos preservados

```text
fechaInicio
fechaFin
presupuesto

kwPunta
kwValle
precioMargen
precioKwPunta
precioKwValle

kwhPunta
kwhLlano
kwhValle

precioKwhPunta
precioKwhLlano
precioKwhValle

costeEnergiaPunta
costeEnergiaLlano
costeEnergiaValle

alqContador
bonoSocial
iee
iva
```

`costeEnergiaVariable` se mantendrá temporalmente para migración, pero dejará de ser fuente implícita cuando existan los tres periodos.

### 5.2 Correcciones

- días inclusivos;
- validación de fechas;
- valores no negativos;
- límites razonables;
- aritmética decimal;
- redondeo único;
- alerta basada en el total mostrado;
- peajes correctamente mapeados;
- versión del motor;
- instantáneas históricas.

### 5.3 Compatibilidad

Se crearán pruebas de caracterización del motor antiguo.

Cuando una corrección cambie resultados:

- se documenta;
- se añade un fixture nuevo;
- se conserva el resultado anterior como evidencia;
- no se recalculan automáticamente facturas históricas.

---

## 6. Autenticación y aislamiento

### 6.1 Acceso

- Google obligatorio.
- Una cuenta permitida en la primera etapa.
- Allowlist en servidor.
- Token Firebase verificado en cada API.
- App Check.
- Cierre de sesión.

### 6.2 Multiusuario

Todas las rutas Firestore quedan bajo:

```text
users/{uid}/...
```

Cada usuario dispone de:

- configuración;
- precios;
- borrador;
- facturas;
- simulaciones;
- versiones;
- fuentes;
- chats;
- ofertas;
- comparaciones;
- copias.

### 6.3 Prohibiciones

- no confiar en el `uid` enviado por el navegador;
- no permitir APIs sin token;
- no guardar secretos en `src`;
- no autorizar solo mediante botones ocultos;
- no usar reglas `allow if true`.

---

## 7. Persistencia y versiones

### 7.1 Entidades principales

- `users`;
- `settings`;
- `priceProfiles`;
- `calculatorDraft`;
- `bills`;
- `billVersions`;
- `sources`;
- `chatThreads`;
- `messages`;
- `tariffOffers`;
- `comparisons`;
- `backups`;
- `auditEvents`.

### 7.2 Versionado

Cada guardado explícito:

1. valida `baseRevision`;
2. escribe nueva instantánea;
3. incrementa revisión;
4. conserva máximo 20;
5. registra resumen;
6. devuelve conflicto si la revisión cambió.

No se crean versiones con cada pulsación.

### 7.3 Migración desde localStorage

La primera modernización debe incluir un importador controlado:

- detecta claves antiguas;
- muestra resumen;
- permite importar;
- valida;
- crea documentos;
- conserva copia exportable;
- no borra localStorage hasta confirmar.

---

## 8. API

### 8.1 Rutas objetivo

```text
POST   /api/auth/bootstrap
POST   /api/bills
PATCH  /api/bills/:id
DELETE /api/bills/:id
GET    /api/bills/:id/versions
POST   /api/bills/:id/restore

POST   /api/pvpc/prices
POST   /api/documents/extract
POST   /api/chat/respond
POST   /api/tariffs/search
POST   /api/tariffs
PATCH  /api/tariffs/:id
POST   /api/comparisons

POST   /api/exports
GET    /api/backups
POST   /api/backups/:id/restore
```

### 8.2 Middleware común

- ID token;
- allowlist;
- App Check;
- request ID;
- rate limit;
- content type;
- tamaño;
- Zod;
- errores;
- logs redactados.

### 8.3 Límites

- JSON general: límite reducido y justificado.
- Documento: 5 MB inicial.
- PDF/JPG/PNG.
- timeout de Gemini.
- timeout de e·sios.
- reintentos controlados.
- no devolver fallbacks ficticios.

---

## 9. Integración PVPC

### 9.1 Fuente

- API oficial e·sios desde servidor.
- Token en secreto.
- Validación de unidades.
- caché por periodo.
- fecha y procedencia.

### 9.2 Fallo

Si falla:

- no llamar a Gemini para inventar precios;
- no ejecutar algoritmo estacional;
- no modificar el formulario;
- permitir entrada manual.

### 9.3 Corrección de periodos

Las reglas P1/P2/P3 y peajes deben estar centralizadas y probadas. No duplicar constantes entre cliente y servidor.

---

## 10. Extracción de facturas

### 10.1 Flujo

1. Validar archivo.
2. Procesar temporalmente.
3. Gemini con JSON Schema.
4. Campos faltantes como `null`.
5. Descartar PII.
6. Eliminar archivo.
7. Mostrar revisión.
8. Aplicar solo con confirmación.

### 10.2 Prohibiciones

- no usar factura de ejemplo;
- no completar IVA automáticamente;
- no sustituir cero válido;
- no mostrar éxito si el modelo falla;
- no persistir Base64;
- no incluir documento completo en logs.

---

## 11. Asesor

### 11.1 Contexto

El backend construirá un objeto explícito con:

- datos;
- resultados;
- consumo total;
- presupuesto;
- fuentes seleccionadas;
- comparación seleccionada.

### 11.2 Persistencia

- threads;
- messages;
- timestamps de servidor;
- citas;
- estado;
- error.

### 11.3 Seguridad

- rate limit;
- sanitización;
- no HTML;
- no contexto global automático;
- protección contra prompt injection documental;
- no revelar instrucciones del sistema.

---

## 12. Comparador

### 12.1 Búsqueda

Gemini y Google Search solo descubren ofertas.

Cada candidata queda:

- pendiente;
- con fuente;
- fecha;
- campos incompletos;
- revisión humana.

### 12.2 Cálculo

Motor determinista:

- normaliza por días;
- calcula energía;
- potencia;
- cargos;
- impuestos;
- servicios;
- total;
- diferencia contra tarifa actual.

No se usa una tarifa más cara como referencia.

### 12.3 Manual

El comparador debe funcionar completamente sin búsqueda automática.

---

## 13. Copias

- exportación manual completa;
- copia diaria opcional;
- retención configurable;
- Cloud Storage privado;
- checksum;
- versión de esquema;
- copia previa a restaurar;
- restauración transaccional;
- auditoría.

---

## 14. Seguridad

### 14.1 Prioridades

1. APIs autenticadas.
2. Reglas Firestore.
3. secretos.
4. validación.
5. archivos.
6. rate limit.
7. CSP.
8. logs.
9. dependencias.
10. pruebas.

### 14.2 Reglas Firestore

Corregir:

- `hasAll` por validación de campos permitidos;
- igualdad ID ruta/dato;
- timestamps de servidor;
- campos inmutables;
- validación completa;
- email verificado si se requiere;
- denegación por defecto.

---

## 15. Pruebas

### 15.1 Caracterización

Antes de corregir, capturar:

- fixture de calculadora;
- navegación;
- guardado;
- historial;
- chat fallback;
- PVPC fallback;
- comparador fallback;
- responsive.

Estas pruebas describen el comportamiento anterior, incluso si luego cambia.

### 15.2 Corrección

Cada defecto requiere:

- prueba que falla;
- cambio mínimo;
- prueba que pasa;
- regresión de pantallas afectadas.

### 15.3 Herramientas

- Vitest;
- Testing Library;
- Playwright;
- Emulator Suite;
- axe;
- análisis de bundle.

---

## 16. Despliegue

### 16.1 Estrategia recomendada

- frontend Vite en Firebase Hosting;
- Express en Cloud Run;
- `/api/**` mediante rewrite;
- Firestore y Auth en Firebase;
- Functions para tareas;
- GitHub Actions o Cloud Build.

La arquitectura anterior de App Hosting queda pospuesta para evitar reescritura.

### 16.2 Entornos

- desarrollo;
- staging;
- producción.

Proyectos Firebase separados.

### 16.3 Rollback

- etiquetas;
- imagen anterior de Cloud Run;
- canal previo de Hosting;
- migraciones reversibles;
- copia antes de migrar datos.

---

## 17. Fases

### Fase 0 — Baseline exacto

- importar ZIP;
- corregir instalación;
- compilar;
- ejecutar;
- inventariar;
- no cambiar UI ni comportamiento;
- reproducir los diez estados visuales aportados;
- comprobar los dos estados del panel de Fuentes;
- crear capturas de regresión;
- crear commit y etiqueta.

### Fase 1 — Pruebas de caracterización

- motor;
- navegación;
- formularios;
- historial;
- APIs;
- responsive.

### Fase 2 — Modularización segura

- extraer motor;
- tipos;
- validación;
- componentes sin cambiar DOM perceptible.

### Fase 3 — Correcciones de Calculadora

- días;
- validación;
- redondeo;
- P2/P3;
- campos;
- Sandbox.

### Fase 4 — Autenticación y API segura

- Google;
- allowlist;
- tokens;
- middleware;
- rate limit.

### Fase 5 — Firestore y versiones

- modelo;
- aislamiento;
- migración local;
- 20 versiones;
- conflictos.

### Fase 6 — Historial

- decimales;
- selección;
- vacío;
- versiones;
- restauración.

### Fase 7 — PVPC

- e·sios;
- sin fallback;
- procedencia.

### Fase 8 — Extracción

- sin datos ficticios;
- revisión;
- borrado de archivos.

### Fase 9 — Asesor

- contexto;
- citas;
- seguridad.

### Fase 10 — Comparador

- búsqueda y manual;
- cálculo correcto.

### Fase 11 — Copias

- exportación;
- automatización;
- restauración.

### Fase 12 — Accesibilidad y estética

- mejoras localizadas;
- tema claro;
- Stitch secundario.

### Fase 13 — Producción

- CI;
- despliegue;
- monitorización;
- seguridad.

---

## 18. Prompt inicial para Google AI Studio — Fase 0

```text
PROYECTO
PVPC Auditor.

FUENTE DE CÓDIGO
Trabaja sobre el repositorio importado PVPCAuditor-v4-main. No generes una aplicación nueva.

OBJETIVO
Crear una línea base reproducible y verificada de la aplicación existente, sin cambiar su apariencia, funcionalidades, fórmulas ni estructura visual.

AUTORIDAD
- El repositorio existente es la referencia funcional y visual de esta fase.
- Informe funcional PVPC Auditor V2.
- Diseño y Prototipado PVPC Auditor V3.
- Arquitectura e Implementación PVPC Auditor V3.
- Diez capturas reales de la aplicación anterior.

TRABAJO AUTORIZADO
1. Examinar todos los archivos.
2. Generar un inventario de pantallas, componentes, campos, APIs y persistencia.
3. Comprobar package.json, package-lock.json y bun.lock.
4. Elegir npm como gestor y regenerar package-lock.json de forma coherente.
5. Añadir engines con una versión de Node compatible con las dependencias disponibles, sin inventar una versión no instalada.
6. Instalar.
7. Ejecutar TypeScript.
8. Ejecutar build.
9. Arrancar la aplicación.
10. Realizar smoke tests.
11. Crear una carpeta de pruebas, pero solo añadir pruebas de humo mínimas que no obliguen a refactorizar.
12. Documentar variables de entorno sin incluir secretos.
13. Corregir únicamente problemas que impidan instalar, compilar o arrancar.
14. Mantener React, Vite, Express, Tailwind, Recharts y la estructura existente.

PROHIBIDO
- No migrar a Next.js.
- No rediseñar.
- No aplicar las imágenes Stitch.
- No eliminar campos.
- No simplificar la Calculadora.
- No cambiar fórmulas.
- No renombrar textos.
- No modificar Firebase.
- No corregir todavía días, chat, escáner, PVPC o comparador.
- No eliminar componentes, aunque parezcan no usados.
- No actualizar todas las dependencias.
- No introducir autenticación nueva.
- No modificar App.tsx salvo que sea imprescindible para compilar, y en ese caso justificarlo.

VERIFICACIÓN
- npm ci debe funcionar después de regenerar el lockfile.
- TypeScript debe pasar.
- build debe pasar.
- servidor debe arrancar.
- GET / debe responder correctamente.
- Las cuatro secciones deben seguir visibles.
- La barra lateral y el árbol histórico deben conservarse.
- El panel de Fuentes debe funcionar desplegado y plegado como raíl vertical.
- La réplica de factura debe mantenerse en la columna derecha.
- La Calculadora debe conservar:
  - potencia Punta y Valle;
  - costes de potencia €/kW/año;
  - peajes €/kWh;
  - coste de energía €/kWh;
  - impuestos y regulados.
- Enumera todos los archivos modificados.
- Explica cada cambio.
- Informa de errores no corregidos.

ENTREGA
1. Estado de instalación.
2. Estado de build.
3. Inventario.
4. Archivos modificados.
5. Pruebas ejecutadas.
6. Riesgos.
7. Confirmación explícita de que no hubo cambios funcionales o visuales.

CONDICIÓN DE PARADA
No comiences la Fase 1 ni corrijas defectos funcionales. Detente cuando la línea base compile, arranque y esté documentada.
```

---

## 19. Prompt Fase 1 — Caracterización

```text
Trabaja sobre la línea base validada. No cambies todavía el comportamiento.

OBJETIVO
Añadir pruebas que capturen el comportamiento actual y permitan corregirlo después sin perder funcionalidades.

PRUEBAS
- motor de factura con valores predeterminados;
- fechas iguales, invertidas y 1–30 de junio;
- campos de potencia €/kW/año;
- peajes €/kWh;
- energía €/kWh;
- guardado de simulación;
- guardado de factura;
- carga, edición y borrado;
- navegación;
- historial vacío;
- chat;
- escáner;
- PVPC;
- comparador;
- responsive 390, 768 y 1440.

No consideres correcto un defecto solo porque esté caracterizado. Etiqueta cada prueba como:
- comportamiento válido;
- defecto conocido;
- no verificable.

No refactorices App.tsx.
Ejecuta pruebas, TypeScript y build.
Detente.
```

---

## 20. Prompt Fase 2 — Extraer motor sin cambiar resultados

```text
Extrae exclusivamente los tipos y el motor de cálculo a módulos de dominio.

REGLAS
- Mantén temporalmente los resultados exactos actuales.
- Mantén todos los campos.
- No cambies días ni redondeos todavía.
- No cambies interfaz.
- Sustituye imports con el mínimo diff.
- Añade pruebas de regresión.
- No extraigas Historial, Asesor ni Comparador.

Criterio:
el DOM perceptible y los fixtures deben permanecer iguales.
Detente.
```

---

## 21. Prompt Fase 3 — Correcciones de Calculadora

```text
Corrige exclusivamente la Calculadora.

TRABAJO
- días inclusivos;
- fechas inválidas;
- valores negativos;
- límites;
- decimal;
- redondeo;
- alerta consistente;
- mapeo P1/P2/P3;
- etiquetas completas;
- conservar simultáneamente:
  - €/kW/año de potencia;
  - €/kWh de peajes;
  - €/kWh de energía.
- crear modo Básico/Avanzado sin eliminar ningún campo;
- conectar el Sandbox como Simulador de ahorro o deshabilitarlo claramente.

No rediseñes.
No modifiques Asesor, Historial o Comparador.
Añade pruebas para cada corrección.
Detente.
```

---

## 22. Prompts de corrección posteriores

Las fases 4 a 13 seguirán los prompts progresivos de la V1, adaptados a estas reglas:

1. Trabajar siempre sobre el repositorio existente.
2. No migrar framework.
3. Mantener apariencia antigua.
4. No eliminar campos.
5. Hacer cambios mínimos.
6. Ejecutar regresión visual.
7. Detenerse tras cada fase.
8. No aceptar fallbacks ficticios.
9. No permitir APIs públicas.
10. No avanzar con pruebas rojas.

---

## 23. Criterios de aceptación

1. La aplicación se reconoce como la anterior.
2. Ninguna funcionalidad válida desaparece.
3. La Calculadora mantiene todos sus campos.
4. Los tres tipos de precios se distinguen.
5. El repositorio instala con `npm ci`.
6. Existen pruebas antes de refactorizar.
7. Cada corrección tiene prueba.
8. No hay reescritura global.
9. No hay datos ficticios.
10. No hay estimación PVPC silenciosa.
11. El comparador calcula contra el usuario.
12. El chat recibe resultados.
13. APIs autenticadas.
14. Usuarios aislados.
15. 20 versiones.
16. Archivos originales eliminados.
17. Copias configurables.
18. Responsive y accesibilidad.
19. Despliegue reversible.
20. Los cambios visuales son localizados.

---

## 24. Riesgos

| Riesgo | Mitigación |
|---|---|
| Refactor grande rompe funciones | Fases pequeñas y caracterización |
| App.tsx monolítico | Extracción progresiva |
| Migración de datos | Importador y copia |
| Diseño se vuelve distinto | Aplicación antigua como autoridad |
| AI Studio simplifica campos | Prompt con inventario obligatorio |
| Stack limita App Hosting | Hosting + Cloud Run |
| Dependencias viejas | Actualización gradual |
| Cálculos históricos cambian | Snapshot y versión de motor |
| IA inventa | Schema, nulls y revisión |
| Coste de servicios | Rate limits y presupuestos |

---

## 25. Cambios respecto a V2

- Se incorporan las diez capturas reales como baseline visual.
- Se exige regresión visual de escritorio en Fase 0.
- Se documentan los dos estados del panel de Fuentes.
- Se exige conservar la réplica sticky, el árbol histórico y la composición del Comparador.
- Se aclara que el móvil continúa pendiente de capturas reales.
- Se abandona la reconstrucción desde cero.
- Se conserva React + Vite + Express.
- Se pospone Next.js.
- Se usa el repositorio como fuente de implementación.
- La estética antigua pasa a ser principal.
- Se introduce Fase 0 de línea base.
- Se añaden pruebas de caracterización.
- Se prohíben refactors globales.
- Se preservan explícitamente todos los precios.
- Se recomienda Firebase Hosting + Cloud Run.
