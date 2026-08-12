# Plan: Increase Service Icon Size

The user wants to make the icons in the "Especialidades" (Services) section larger. I will adjust the dimensions of the icons in the `Services.tsx` component.

## Changes

### 1. Update `src/components/site/Services.tsx`
- Increase the Tailwind classes for the icon image.
- Current: `h-16 w-16 md:h-20 md:w-20`
- New: `h-20 w-20 md:h-28 md:w-28` (or similar proportion to ensure they look significantly larger but still fit the layout).

## Verification
- Visually verify the icons in the preview.
- Ensure the layout remains balanced on both mobile and desktop.
