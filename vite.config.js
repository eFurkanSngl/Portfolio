import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" && !process.env.VERCEL ? "/Portfolio/" : "/",
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
}));
