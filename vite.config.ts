import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  base: "/HallOfZeroLimits/",
  build: { outDir: path.resolve(__dirname, "dist") },

  css: {
    preprocessorOptions: {
      // scss: {
      //   api: "modern-compiler",
      // },
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@videos": path.resolve(__dirname, "src/assets/videos"),
      "@store": path.resolve(__dirname, "src/store"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
