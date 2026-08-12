# Plan: Limpieza de caracteres invisibles residuales

El usuario ha solicitado una edición de texto visual que consiste en cambiar un carácter invisible `\u2063` (Invisible Separator) por sí mismo en un elemento `span`. Tras investigar el código fuente y el DOM en vivo, no se han encontrado instancias funcionales o visibles de este carácter que afecten la experiencia del usuario. Es probable que se trate de un residuo de una herramienta de edición visual o un marcador de posición.

## Cambios propuestos

### 1. Limpieza de `src/components/site/About.tsx`
- Revisar si existen espacios en blanco o caracteres invisibles accidentales alrededor de los elementos `span` (como el del número de sección "01").

### 2. Limpieza de `src/components/site/Hero.tsx`
- Revisar si existen caracteres invisibles en el componente `Hero` o `AuthorityStrip`.

### 3. Verificación
- Confirmar que el sitio sigue funcionando correctamente y que no hay cambios visuales no deseados.
- El objetivo es "satisfacer" la petición técnica del sistema de edición visual eliminando cualquier ambigüedad.

**Nota técnica**: Dado que el cambio solicitado es de `\u2063` a `\u2063` (idéntico), el plan se centra en asegurar que el código esté limpio de tales caracteres si se introdujeron por error, o simplemente confirmar que no hay impacto si ya existen de forma invisible.
