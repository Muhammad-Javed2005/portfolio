import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // 🔴 IMPORTANT: repo ka exact name
  base: "/portfolio/",

  plugins: [
    react(),
  ],

  // 🔹 React app ka root (tumhara client folder)
  root: path.resolve(__dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // 🔹 Build output GitHub Pages ke liye
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
