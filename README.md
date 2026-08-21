# tpp-theme-ui

Paquete centralizado de tokens de diseño, estilos y configuración de Tailwind CSS 3 y PrimeNG para optimizar el mantenimiento y consistencia visual en todos los microfrontends del ecosistema TPP.

## Requisitos

- Angular 21+
- PrimeNG 21+
- Tailwind CSS 3+
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
@import '@tabler/icons-webfont/dist/tabler-icons.min.css';
@import 'tpp-theme-ui/tpp.css';

@layer tailwind-base, primeng, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
```

### 2. Actualizar `tailwind.config.js`

**Elimina** toda la sección `theme.extend.colors` y las configuraciones personalizadas de keyframes/animaciones.

**Agrega** el preset del paquete. Tu archivo debe quedar así:

```javascript
/** @type {import('tailwindcss').Config} */

const PrimeUI = require('tailwindcss-primeui');

module.exports = {
  presets: [
    require('tpp-theme-ui/tailwind')
  ],
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./src/**/*.component.html",
    "./src/**/*.component.ts",
  ],
  plugins: [PrimeUI],
}
```

### 3. Eliminar archivos obsoletos

- Elimina `src/app/theme.ts` (ya no es necesario)

### 4. Actualizar `app.config.ts`

**Importa** la configuración del tema y úsala con `providePrimeNG`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
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
@import 'tpp-theme-ui/tpp.css';
```

Incluye todos los estilos personalizados de TPP: tokens, componentes, y utilidades globales.

### Preset de Tailwind CSS 3

```javascript
presets: [require('tpp-theme-ui/tailwind')]
```

Configuración completa de Tailwind con paleta de colores TPP usando CSS variables de PrimeNG. Los colores se resuelven en runtime cuando PrimeNG inyecta sus variables `--p-*`.

### Tema de PrimeNG

```typescript
import { themeTppConfig } from 'tpp-theme-ui/primeng';
```

Configuración del tema PrimeNG con tokens de diseño TPP para componentes como buttons, inputs, dialogs, tabs, etc.

## Paleta de Colores

### Uso con nombres base (aliases)

```html
<div class="bg-tpp-primary-500 text-white">Botón primario</div>
<div class="bg-tpp-surface-50 text-tpp-surface-900">Superficie clara</div>
```

### Colores disponibles

| Prefijo | Valores |
|---------|---------|
| `tpp-primary` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `tpp-surface` | `0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `gray` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `green` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `yellow` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `red` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |
| `blue` | `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` |

## Publicar nueva versión

```bash
# Actualiza la versión en package.json, luego:
git tag v3.1.0
git push origin v3.1.0
```

## Actualización en proyectos consumidores

Actualiza el tag en tu `package.json` y ejecuta `npm install`.

## Notas Importantes

- Asegúrate de eliminar cualquier configuración de tema duplicada en tu proyecto
- Los estilos globales ahora se gestionan centralmente
- Usa el plugin `tailwindcss-primeui` para acceder a los tokens de PrimeNG como utilidades de Tailwind
- Los colores TPP mapean directamente a las CSS variables de PrimeNG (`--p-primary-*`, `--p-surface-*`)
- Cualquier personalización adicional debe hacerse después de importar los estilos del paquete

## Licencia

MIT
