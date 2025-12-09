import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "The Bears Berlin | Full-Service Digital Agency | Berlin",
          description:
            "The Bears Berlin - Full-service digital agency based in Berlin offering social media management, web design, AI solutions, and creative marketing services.",
        },
      },
    }),
  ],
  esbuild: {
    target: "esnext",
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
