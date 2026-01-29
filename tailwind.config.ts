import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // No Tailwind v4, as cores são definidas no CSS usando @theme
  // Este arquivo é mantido apenas para o content
};

export default config;