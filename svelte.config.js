import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import * as pluginStuff from `@sveltejs/vite-plugin-svelte`
// console.log(pluginStuff)
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
