import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1728px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        "second-background": "var(--second-background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "blue-start": "var(--primary-blue-start)",
        "blue-mid": "var(--primary-blue-mid)",
        "blue-end": "var(--primary-blue-end)",
        "primary-yellow": "var(--primary-yellow)",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "36": "9rem",
        "42": "10.5rem",
        "88": "22rem",
      },
      width: {
        "screen-1/2": "50vw",
        "screen-3/4": "75vw",
        "screen-4/5": "80vw",
        "screen-9/10": "90vw",
        fit: "fit-content",
      },
      height: {
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-9/10": "90vh",
        fit: "fit-content",
      },
      minHeight: {
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
      },
      maxWidth: {
        "2xl": "1536px",
        "3xl": "1728px",
        "4xl": "1920px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [animate],
} satisfies Config;
