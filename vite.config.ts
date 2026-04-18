import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solid(),
    tailwindcss(),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
    // Ensure single-page reload works on GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Base path for GitHub Pages user site (no subdirectory needed)
  base: "/",
});
