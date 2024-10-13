import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      "@assets": join(__dirname, "public", "assets"),
      "@styles": join(__dirname, "src", "client", "scss"),
      "@widgets": join(__dirname, "src", "client", "widgets")
    }
  }
});
