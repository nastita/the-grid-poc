import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// The following code is used to copy assets from the web-components package to the project
// These assets are already committed, so this is not necessary
// import { assets } from '@lukso/web-components/tools/assets'
// import { copyAssets } from '@lukso/web-components/tools/copy-assets'

// copyAssets('./src', assets)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('lukso-'),
        },
      }
}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      parse: path.resolve(__dirname, './node_modules/parse/dist/parse.min.js')
    }
  }
})
