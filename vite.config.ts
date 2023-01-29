import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import GlobalPolyFill  from "@esbuild-plugins/node-modules-polyfill"
// import GlobalPolyFill from "@esbuild-plugins/node-globals-polyfill";
import { resolve } from "path";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
//   define: { global: "window", "process.env":{}}
// })

export default defineConfig({
  plugins: [svelte()],
  build: {
    chunkSizeWarningLimit: 200*1024,
  },
  optimizeDeps: {
      esbuildOptions: {
          define: {
              global: "globalThis",
          },
          plugins: [
            //   GlobalPolyFill({
            //       // process: true,
            //       // buffer: true,
            //   }),
          ],
      },
  },
  resolve: {
      alias: {
          process: "process/browser",
          stream: "stream-browserify",
          zlib: "browserify-zlib",
          util: "util",
      },
  },
});
