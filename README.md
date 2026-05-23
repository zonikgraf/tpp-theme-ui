# @zonikgraf/tpp-theme-ui

Paquete centralizado de tokens de diseño, estilos y configuración de Tailwind CSS y PrimeNG para optimizar el mantenimiento y consistencia visual en todos los microfrontends del ecosistema TPP.

## Instalación

Requiere autenticación con GitHub Packages. Agrega un `.npmrc` en tu proyecto:

```
@zonikgraf:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_GITHUB_TOKEN
```

Luego instala:

```bash
npm install @zonikgraf/tpp-theme-ui
```

## Guía de Migración

### 1. Actualizar `styles.css`

Elimina todos los estilos personalizados del archivo `src/styles.css` y reemplázalos con:

```css
@import '@tabler/icons-webfont/dist/tabler-icons.min.css';

@import '@zonikgraf/tpp-theme-ui/tpp.css';

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

import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  presets: [
    require('@zonikgraf/tpp-theme-ui/tailwind')
  ],
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./src/**/*.component.html",
    "./src/**/*.component.ts",
  ],
  plugins: [PrimeUI],
}
```

### 3. Eliminar archivo de tema personalizado

Elimina el archivo `src/app/theme.ts` (ya no es necesario).

### 4. Actualizar `app.config.ts`

**Importa** la configuración del tema:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

// Importa la configuración del tema TPP
import { themeTppConfig } from '@zonikgraf/tpp-theme-ui/primeng';

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
```typescript
import '@zonikgraf/tpp-theme-ui/tpp.css';
```
Incluye todos los estilos personalizados de TPP: tokens, componentes, y utilidades globales.

### Preset de Tailwind
```javascript
presets: [require('@zonikgraf/tpp-theme-ui/tailwind')]
```
Configuración completa de Tailwind con:
- Paleta de colores TPP (primary, surface)
- Paletas semánticas (red, green, yellow, blue)
- Animaciones personalizadas (fadeInUp)

### Tema de PrimeNG
```typescript
import { themeTppConfig } from '@zonikgraf/tpp-theme-ui/primeng';
```
Configuración del tema PrimeNG con tokens de diseño TPP para componentes como buttons, inputs, dialogs, tabs, etc.

## Paleta de Colores

- **tpp-primary**: `50, 100, 200, 300, 400, 500, 600, 700, 800, 900`
- **tpp-surface**: `25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`
- **red**: `50 → 900` (error/peligro)
- **green**: `50 → 900` (éxito/completado)
- **yellow**: `50 → 900` (advertencia)
- **blue**: `50 → 900` (informativo)

### Uso en Tailwind
```html
<div class="bg-tpp-primary-500 text-white">
  Botón primario
</div>

<div class="bg-tpp-surface-50 text-tpp-surface-900">
  Superficie clara
</div>
```

## Publicar nueva versión

```bash
# Actualiza la versión en package.json, luego:
git tag v1.0.2
git push origin v1.0.2
# El workflow de GitHub Actions publicará automáticamente
```

## Actualización en proyectos consumidores

```bash
npm update @zonikgraf/tpp-theme-ui
```

## Notas Importantes

- Asegúrate de eliminar cualquier configuración de tema duplicada en tu proyecto
- Los estilos globales ahora se gestionan centralmente
- Cualquier personalización adicional debe hacerse después de importar los estilos del paquete
- Si necesitas sobrescribir estilos, usa capas de Tailwind o especificidad CSS

## Licencia

MIT
