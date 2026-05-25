/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#94a3b8",
        tertiary: "#101a33",
        "black-100": "#0b1224",
        "black-200": "#060b16",
        accent: "#22d3ee",
        ember: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 32%), radial-gradient(circle at 80% 16%, rgba(245,158,11,0.16), transparent 22%), linear-gradient(145deg, rgba(5,8,22,0.96), rgba(4,10,26,0.92))",
      },
      boxShadow: {
        card: "0 24px 80px rgba(2, 8, 23, 0.45)",
        soft: "0 12px 48px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
