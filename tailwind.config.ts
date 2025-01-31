import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screen: {
      "2xl": 1440,
      xl: 1280,
      lg: 1024,
      md: 768,
      sm: 512,
    },
    colors: {
      pm: "rgb(var(--color-pm))",
      dark: "rgb(var(--color-dark))",
      white: "rgb(var(--color-white))",
      gray: "rgb(var(--color-gray))",
    },
    fontFamily: {
      main: "var(--font-main)",
      alt: "var(--font-alt)",
    },
    extend: {
      fontSize: {
        md: "1.15rem",
        base: "1rem",
        sm: "0.75rem",
      },
      borderRadius: {
        rounded: "50%",
        main: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config
