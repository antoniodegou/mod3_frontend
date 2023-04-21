import { resolve } from 'path'
import { defineConfig } from 'vite'

console.log(resolve)

export default defineConfig({
    base: "./",
    server: {
      open: '/nested/about.html',
    },
    build: {
      outDir : "docs",
      cssMinify: false,
    //   polyfillModulePreload: false,
    //   cssCodeSplit: false,
    //   minify: false,
      rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'nested/about.html'),
            me: resolve(__dirname, 'nested/me.html'),
            // nested: resolve(__dirname, 'nested/me.html'),
          },
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        //   assetsInclude: '**/*.html'
        },
      },
    }

  })
