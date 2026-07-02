import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        autumn: {
          dark: "#120c08",
          deep: "#22140c",
          orange: "#f97316",
          gold: "#facc15",
          green: "#22c55e",
          muted: "#a8a29e",
          charcoal: "#1c1917",
          amber: "#d97706",
        }
      }
    }
  },
  plugins: [],
};

export default config;
