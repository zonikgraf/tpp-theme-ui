# tpp-theme-ui

Paquete centralizado de tokens de diseño, estilos y configuración de Tailwind CSS v4 y PrimeNG para optimizar el mantenimiento y consistencia visual en todos los microfrontends del ecosistema TPP.

## Requisitos

- Angular 21+
- PrimeNG 21+
- Tailwind CSS 4+
- Node.js 22+

## Instalación

Puedes instalar esta biblioteca directamente desde GitHub:

```bash
npm install github:zonikgraf/tpp-theme-ui
```

O agréguelo a su archivo `package.json`:

```json
"dependencies": {
  "tpp-theme-ui": "github:zonikgraf/tpp-theme-ui"
}
```

## Guía de Migración

### 1. Actualizar `styles.css`

Reemplaza el contenido de tu archivo `src/styles.css` con:

```css
@import "tailwindcss";
@import "tailwindcss-primeui";
@import "@tabler/icons-webfont/dist/tabler-icons.min.css";
@import "tpp-theme-ui/tpp.css";

@import "tpp-theme-ui/tailwind.css";
```

### 2. Eliminar archivos obsoletos

- Elimina `tailwind.config.js` o `tailwind.config.ts`
- Elimina `src/app/theme.ts` (ya no es necesario)

### 3. Actualizar `app.config.ts`

**Importa** la configuración del tema y úsala con `providePrimeNG`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

// Importa la configuración del tema TPP
import { themeTppConfig } from 'tpp-theme-ui/primeng';

import { routes } from './app.routes';

// Define el tema con la configuración TPP
const themeTpp = definePreset(Aura, themeTppConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: themeTpp,
        options: {
          darkModeSelector: false || 'none',
        }
      }
    })
  ]
};
```

## Contenido del Paquete

### Estilos TPP

```css
@import "tpp-theme-ui/tpp.css";
```

Incluye todos los estilos personalizados de TPP: tokens, componentes, y utilidades globales.

### Preset de Tailwind CSS v4

```css
@import "tpp-theme-ui/tailwind.css";
```

Configuración de Tailwind con paleta de colores TPP usando `@theme inline` directive. Los colores se resuelven en runtime desde las CSS variables de PrimeNG (`--p-primary-*`, `--p-surface-*`).

### Tema de PrimeNG

```typescript
import { themeTppConfig } from 'tpp-theme-ui/primeng';
```

Configuración del tema PrimeNG con tokens de diseño TPP para componentes como buttons, inputs, dialogs, tabs, etc.

## Paleta de Colores


### Uso con nombres base (aliases)

```html
<div class="bg-primary-500 text-white">Botón primario</div>
<div class="bg-surface-50 text-surface-900">Superficie clara</div>
```

### Colores disponibles

| Prefijo | Valores |
|---------|---------|
| `primary` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `surface` | `0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `gray` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `green` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `yellow` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `red` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `blue` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |

### Animaciones

| Clase | Descripción |
|-------|-------------|
| `animate-fade-in-up` | Animación de entrada desde abajo |

## Publicar nueva versión

```bash
# Actualiza la versión en package.json, luego:
git tag v2.1.0
git push origin v2.1.0
```

## Actualización en proyectos consumidores

Actualiza el tag en tu `package.json` y ejecuta `npm install`.

## Notas Importantes

- Asegúrate de eliminar cualquier configuración de tema duplicada en tu proyecto
- Los estilos globales ahora se gestionan centralmente
- Usa el plugin `tailwindcss-primeui` para acceder a los tokens de PrimeNG como utilidades de Tailwind
- Los colores TPP mapean directamente a las CSS variables de PrimeNG (`--p-primary-*`, `--p-surface-*`)
- El archivo `tailwind.css` usa `@theme inline` para evitar que Tailwind resuelva las variables CSS en build time. Los colores se resuelven en runtime cuando PrimeNG inyecta sus variables `--p-*`.
- Cualquier personalización adicional debe hacerse después de importar los estilos del paquete

## Licencia

MIT
