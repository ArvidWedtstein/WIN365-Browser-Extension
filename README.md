# win365-browser-extension

A [Vite](https://vitejs.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.) starter template based on `manifest 3`, `vue3` and `vite` and a lot more pre-configured.

## Directory Structure

```bash
.
├── dist                     # Built extension files
│   ├── chrome              # Chrome-specific build
│   └── firefox             # Firefox-specific build
├── public                  # Static assets
│   └── icons              # Extension icons
├── scripts                 # Build/dev scripts
├── src                     # Source code
│   ├── assets             # Global assets (images, styles)
│   ├── background         # Extension background script
│   ├── components         # Shared Vue components. Some prebuilt components are available like `Header`, `Footer`, `LoadingSpinner`, `ErrorBoundary`, `EmptyState` etc
│   ├── composables        # Vue composables/hooks
│   │   ├── useBrowserStorage  # Browser storage for both `sync` and `local`
│   │   ├── useLocale  # Manage locale in your extension
│   │   ├── useTheme  # Manage theme in your extension
│   ├── content-script     # Content scripts injected into pages
│   ├── devtools          # Chrome devtools panel
│   ├── locales           # i18n translation files
│   ├── offscreen         # Offscreen pages (audio, recording)
│   ├── stores            # Pinia stores
│   ├── types             # TypeScript type definitions
│   ├── ui                # UI pages
│   │   ├── action-popup  # Browser toolbar popup
│   │   ├── common        # Shared pages
│   │   ├── content-script-iframe        # Content script app injected into pages by content script
│   │   ├── devtools-panel # Devtools panel UI
│   │   ├── options-page  # Extension options
│   │   ├── setup        # Install/update pages
│   │   └── side-panel   # Browser side panel
│   └── utils            # Shared utilities
├── manifest.config.ts    # Base manifest configuration
├── vite.chrome.config.ts       # Chrome specific Vite configuration overrides
├── vite.config.ts       # Base Vite configuration
├── vite.firefox.config.ts       # Firefox specific Vite configuration overrides
├── tailwind.config.cjs  # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Development tools

### Vite Plugins

- [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - File system based route generator for Vite
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as components
- [`unplugin-turbo-console`](https://github.com/unplugin/unplugin-turbo-console) - Improve the Developer Experience of console

### Vue Plugins

- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [Notivue](https://github.com/smastrom/notivue) - Powerful toast notification system for Vue and Nuxt.

### Plugins

- [Marked](https://github.com/markedjs/marked) - A markdown parser and compiler. Used for CHANGELOG.md to show in Update page

### Coding Style

- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [ESLint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [Prettier](https://prettier.io/) - Code formatter
- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Browser Related Configurations

- `manifest.config.ts` - Base extension manifest with common configuration
- `manifest.chrome.config.ts` - Chrome/ chromium based browsers specific manifest
- `manifest.firefox.config.ts` - Firefox spefic manifest
- `vite.config.ts` - Base vite configuration
- `vite.chrome.config.ts` - Chrome/ chromium based browsers specific vite configuration
- `vite.firefox.config.ts` - Firefox specific vite configuration

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build extension
- `pnpm lint` - Lint files

_You can also use pnpm dev:chrome, pnpm dev:firefox, pnpm build:chrome, pnpm build:firefox, pnpm lint:fix_

_Then load extension in browser with the `dist/` folder_

**Note**: Pack files under `dist/chrome` or `dist/firefox`, you can upload to appropriate extension store.
