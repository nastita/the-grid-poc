import { fileURLToPath, URL } from 'node:url'

// import tailwindcss from 'tailwindcss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The following code is used to copy assets from the web-components package to the project
// These assets are already committed, so this is not necessary
// import { assets } from '@lukso/web-components/tools/assets'
// import { copyAssets } from '@lukso/web-components/tools/copy-assets'

// copyAssets('./src', assets)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
