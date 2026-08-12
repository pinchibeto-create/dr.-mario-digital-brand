# Plan: Actualización de Iconos de Servicios

El usuario desea actualizar los iconos de la sección de servicios ("especialidades") utilizando los archivos proporcionados en el ZIP `iconos_urologia_webp.zip`. Se respetará la arquitectura actual del proyecto (Netlify + rutas de imágenes en `public/`).

## Cambios propuestos

### 1. Gestión de archivos
- Copiar los nuevos iconos desde `/tmp/extracted_icons/` a `public/images/dr_mario_web_assets_v2/05_iconos_servicios/`.
- Los nuevos nombres de archivos serán:
    - `icono_prostata.webp`
    - `icono_rinones.webp`
    - `icono_salud_masculina.webp`
    - `icono_procedimiento.webp`

### 2. Configuración de rutas (`src/lib/site.ts`)
- Actualizar el objeto `img` para que las claves de los iconos apunten a los nuevos archivos.

### 3. Verificación
- Confirmar que los iconos se visualizan correctamente en la sección de "Especialidades".
- Ejecutar `npm run build` para asegurar que los assets se procesan correctamente para Netlify.

## Detalles técnicos
- Se mantendrán los archivos anteriores en la carpeta por seguridad, pero se cambiarán las referencias en el código.
- No se requieren cambios en el diseño visual de los componentes, solo en la fuente de la imagen.
