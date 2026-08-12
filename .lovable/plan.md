# Plan - Actualización de Contenido y Contacto

Actualizar la sección del doctor y optimizar los botones de contacto según lo solicitado por el Dr. Mario de la Peña.

## Cambios propuestos

1.  **Sección "Conoce a tu doctor" (About.tsx)**:
    -   Modificar `About.tsx` para incluir los nuevos campos: formación académica (UAS, UdeG, UNAM), certificación (CNMU, cédula 12227073) y el texto de enfoque profesional.
    -   Utilizar una presentación visual premium para la formación académica (ej. bloques discretos o lista estilizada).

2.  **Actualización de Contacto (lib/site.ts y componentes)**:
    -   En `lib/site.ts`, asegurar que `WHATSAPP_NUMBER` sea `523333918900`.
    -   Actualizar componentes (`Hero.tsx`, `FaqContact.tsx`, `Header.tsx`, `Footer.tsx`) para incluir un enlace de llamada `tel:+523333918900` junto al botón de WhatsApp en las áreas relevantes.

## Detalles técnicos

-   El componente `About.tsx` será reorganizado para albergar la nueva información sin romper el diseño editorial.
-   `src/lib/site.ts` será actualizado para definir el número de teléfono y asegurar que la función `wa()` use el número correcto.
-   Se añadirá un componente o bloque reutilizable para el contacto dual (Llamada + WhatsApp) en las secciones necesarias.

## Validación

-   Verificar el responsive en móvil: que el botón de llamada dispare el marcador y WhatsApp abra el chat.
-   Comprobar que la jerarquía visual de la formación académica mantenga el estilo editorial.
