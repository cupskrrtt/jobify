import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      "text-primary-1": "var(--text-primary-1)",
      "text-primary-2": "var(--text-primary-2)",
      "text-secondary": "var(--secondary)",
      "text-accent": "var(--accent)",
      "border-primary": "var(--border-primary)",
      "border-secondary": "var(--border-secondary)",
      "border-focus": "var(--border-focus)",
    },
  },
  plugins: [],
} satisfies Config;
