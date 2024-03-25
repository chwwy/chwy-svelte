/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mono2: ["Noto Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
