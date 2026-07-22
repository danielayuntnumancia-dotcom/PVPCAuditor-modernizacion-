# Contexto vigente — PVPC Auditor

## Orden de autoridad

1. Instrucción actual del usuario.
2. Informe funcional V2.
3. Diseño y Prototipado V3.
4. Capturas reales para apariencia de escritorio.
5. Arquitectura e Implementación V3.
6. Código para conocer el comportamiento existente.
7. Stitch, únicamente en fases posteriores.

## Objetivo actual

Clonar y verificar la aplicación existente sin perder funcionalidades ni alterar su diseño.

## Prohibiciones actuales

- No rediseñar.
- No migrar a Next.js.
- No eliminar campos.
- No aplicar correcciones funcionales todavía.
- No utilizar datos ficticios nuevos.
- No comenzar fases posteriores.
```

---

## 3. Revisar secretos antes de subir

No subas:

```text
.env
.env.local
.env.production
service-account.json
firebase-adminsdk*.json
*.pem
*.key
node_modules/
dist/
coverage/
```

Comprueba también que no haya:

- claves Gemini;
- tokens e·sios;
- claves privadas Firebase;
- contraseñas;
- correos privados innecesarios;
- documentos o facturas reales.

Utiliza exclusivamente datos ficticios o anonimizados.

---

## 4. Crear la línea base en Git

Antes de abrir AI Studio:

```bash
git init
git add .
git commit -m "baseline: aplicación PVPC Auditor V4 sin modificaciones"
git branch -M baseline-v4
git remote add origin <URL_DEL_REPOSITORIO_PRIVADO>
git push -u origin baseline-v4
```

Crea también una etiqueta:

```bash
git tag baseline-v4-original
git push origin baseline-v4-original
```

Esta etiqueta permite comparar o volver al estado anterior.

---

## 5. Importar el proyecto en Google AI Studio

1. Abre Google AI Studio.
2. Entra en **Build**.
3. Pulsa el botón **+** del cuadro de instrucciones.
4. Selecciona **Import from GitHub**.
5. Autoriza GitHub si se solicita.
6. Selecciona el repositorio privado.
7. Selecciona la rama `baseline-v4`.
8. Espera a que cargue el árbol completo.
9. Abre la pestaña de código.
10. Comprueba que existen `package.json`, `server.ts`, `src/` y `project-context/`.

No envíes todavía el Prompt 00 completo.

---

## 6. Primera instrucción: lectura sin cambios

La primera interacción debe ser exclusivamente de análisis.

Copia este texto:

```text
Antes de hacer cualquier modificación, lee completamente:

- project-context/00_INDICE.md
- project-context/01_INFORME_FUNCIONAL_V2.md
- project-context/02_DISENO_Y_PROTOTIPADO_V3.md
- project-context/03_ARQUITECTURA_E_IMPLEMENTACION_V3.md
- project-context/04_INVENTARIO_CAPTURAS_V1.md
- project-context/05_PROMPT_00_CLONACION_V2.md

Revisa también todo el repositorio y las diez imágenes de
project-context/screenshots/.

No edites archivos.
No instales dependencias.
No regeneres código.
No corrijas errores.
No rediseñes.

Devuélveme únicamente:

1. Nombre del proyecto identificado.
2. Fuentes y versiones que has leído.
3. Jerarquía de autoridad que aplicarás.
4. Inventario de pantallas.
5. Inventario completo de campos de la Calculadora y sus unidades.
6. Descripción de los dos estados del panel Fuentes del Asesor.
7. Inventario de acciones, gráficos, modales, almacenamiento y APIs.
8. Diferencias detectadas entre documentación, capturas y código.
9. Archivos que propondrías modificar durante la Fase 0.
10. Confirmación expresa de que todavía no has modificado nada.

Detente al finalizar este análisis.
```

### 6.1 Condición para continuar

No continúes si AI Studio:

- ha creado archivos;
- ha modificado el diseño;
- no reconoce los tres grupos de precios;
- confunde las dos capturas del Asesor;
- no menciona las diez capturas;
- propone migrar a Next.js;
- intenta corregir funcionalidades;
- no identifica el repositorio como base principal.

Corrige primero su interpretación con un mensaje breve.

---

## 7. Adjuntar las capturas

Aunque estén en GitHub, adjunta las capturas al chat de Build durante la fase de revisión visual.

Orden recomendado:

1. Calculadora 01 y 02.
2. Asesor 01 y 02.
3. Comparador 01 y 02.
4. Historial de facturas 01 y 02.
5. Historial de simulaciones 01 y 02.

Si la interfaz no permite las diez de una vez, utiliza dos mensajes de cinco imágenes.

Después de cada lote escribe:

```text
Estas imágenes son fuentes visuales, no recursos que debas insertar en la aplicación.

Confirma sus nombres y describe qué estado representa cada una.
No modifiques código todavía.
```

Para el Asesor añade:

```text
Asesor IA web 01 muestra Fuentes desplegadas.
Asesor IA web 02 muestra el mismo panel plegado como raíl vertical.
Ambas imágenes pertenecen a la misma pantalla.
```

---

## 8. Segunda instrucción: ejecutar la Fase 0

Solo después de validar el inventario:

```text
Tu interpretación del repositorio y de las fuentes queda validada.

Ejecuta ahora exactamente el contenido de:

project-context/05_PROMPT_00_CLONACION_V2.md

Respeta todas sus prohibiciones y la condición de parada.

Antes de modificar cada archivo, explica por qué es necesario.
No cambies funcionalidad, fórmulas, textos ni apariencia.
No comiences la Fase 1.
```

---

## 9. Verificaciones que debe devolver AI Studio

La respuesta de la Fase 0 debe contener:

### 9.1 Repositorio

- árbol analizado;
- gestor de paquetes elegido;
- archivos de dependencias modificados;
- versión de Node utilizada;
- variables requeridas.

### 9.2 Ejecución

```text
npm ci
npm run lint
npm run build
npm start
```

Debe indicar resultado real de cada comando.

### 9.3 Funcionalidad visible

- Calculadora;
- Asesor IA;
- Comparador;
- Historial;
- navegación lateral;
- navegación móvil existente;
- árbol histórico;
- panel Fuentes desplegado;
- panel Fuentes plegado.

### 9.4 Calculadora

Debe confirmar estos grupos por separado:

| Grupo | Unidad |
|---|---|
| Potencia contratada | kW |
| Coste de potencia | €/kW/año |
| Consumo | kWh |
| Peajes de acceso | €/kWh |
| Coste de energía | €/kWh |

### 9.5 Comparación visual

Debe entregar una matriz de diez filas, una por captura:

| Captura | Estado reproducido | Diferencias | Justificación |
|---|---|---|---|

### 9.6 Archivos

- lista completa de archivos modificados;
- motivo;
- confirmación de que no hubo cambios funcionales;
- confirmación de que no comenzó la Fase 1.

---

## 10. Qué hacer si AI Studio genera otra aplicación

Detén el proceso si:

- crea un proyecto React nuevo;
- elimina `server.ts`;
- reemplaza el árbol del repositorio;
- transforma la Calculadora en una pantalla simplificada;
- aplica el diseño Stitch;
- cambia todos los componentes;
- elimina el panel Fuentes;
- sustituye Vite por Next.js.

No intentes corregir esa derivación mediante más prompts dentro del mismo proyecto.

Procedimiento:

1. Conserva una captura o registro del error.
2. Elimina ese espacio de trabajo.
3. Comprueba que GitHub mantiene `baseline-v4`.
4. Crea una importación nueva.
5. Repite primero la instrucción de lectura sin cambios.
6. No autorices edición hasta que el inventario sea correcto.

---

## 11. Control de versiones durante el desarrollo

Después de completar la Fase 0:

```bash
git checkout -b fase-00-baseline-verificada
git add .
git commit -m "chore: línea base reproducible y verificada"
git push -u origin fase-00-baseline-verificada
```

Para las fases siguientes:

```text
fase-01-caracterizacion
fase-02-motor
fase-03-calculadora
fase-04-seguridad
...
```

Reglas:

- una fase por rama;
- un objetivo principal por fase;
- no mezclar correcciones;
- no continuar con pruebas fallidas;
- revisar el diff antes de aceptar;
- etiquetar las versiones estables.

---

## 12. Gestión de secretos en AI Studio

Durante la Fase 0 no añadas claves reales.

Cuando una fase posterior las requiera:

- utiliza el panel **Secrets**;
- guarda las claves únicamente en el entorno del servidor;
- no las escribas en componentes React;
- no las incluyas en prompts, capturas o commits;
- no permitas que AI Studio cree un fallback con una clave de ejemplo.

Secretos previstos:

```text
GEMINI_API_KEY
ESIOS_API_TOKEN
AUTHORIZED_EMAILS
```

---

## 13. Orden completo de trabajo

```text
1. Preparar repositorio privado.
2. Añadir project-context.
3. Eliminar secretos.
4. Crear commit y etiqueta baseline.
5. Importar desde GitHub.
6. Enviar instrucción de lectura sin cambios.
7. Adjuntar y validar las diez capturas.
8. Revisar el inventario de AI Studio.
9. Corregir interpretaciones.
10. Autorizar Prompt 00.
11. Revisar comandos y matriz visual.
12. Revisar diff.
13. Crear rama y commit de Fase 0.
14. No comenzar Fase 1 hasta aprobar la línea base.
```

---

## 14. Criterio de éxito

La entrega está correctamente preparada cuando:

- AI Studio trabaja sobre el repositorio real;
- reconoce todas las fuentes vigentes;
- no consulta versiones sustituidas;
- entiende las diez capturas;
- distingue Fuentes desplegadas y plegadas;
- conserva todos los campos;
- no rediseña;
- no corrige todavía;
- instala y compila;
- genera una comparación visual;
- todos los cambios quedan registrados en Git.

