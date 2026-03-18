import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], darkMode: "class",
  theme: { extend: { colors: { brand: { 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d" } } } },
  plugins: [],
};
export default config;
