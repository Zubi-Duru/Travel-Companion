/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#37374E",
        sec: "#666666",
        tert: "#FA8443"
      },
      backgroundImage: {
        bgImg: "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
