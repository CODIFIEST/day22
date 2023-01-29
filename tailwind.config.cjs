// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*",
  './index.html',
'./tailwind.config.cjs'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
