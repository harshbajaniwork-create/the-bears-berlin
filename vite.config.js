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
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - always needed
          if (id.includes("react") && !id.includes("react-icons")) {
            return "react";
          }

          // Router - needed for navigation
          if (
            id.includes("@tanstack/react-router") ||
            id.includes("@tanstack/react-query")
          ) {
            return "router";
          }

          // Defer heavy 3D libraries until actually needed
          if (id.includes("three") || id.includes("@react-three")) {
            return "three";
          }

          // Split heavy icon libraries - only load when used
          if (id.includes("react-icons/gi")) {
            return "icons-gi";
          }
          if (id.includes("react-icons/fa6")) {
            return "icons-fa";
          }
          if (id.includes("react-icons")) {
            return "icons";
          }

          // Animation libraries
          if (id.includes("framer-motion") || id.includes("gsap")) {
            return "animations";
          }

          // Project pages - separate chunks
          if (id.includes("/projects/") && id.includes("/page")) {
            const match = id.match(/\/projects\/([^/]+)\/page/);
            if (match) {
              return `project-${match[1]}`;
            }
          }

          // Main pages
          if (id.includes("/app/") && id.includes("/page")) {
            const match = id.match(/\/app\/([^/]+)\/page/);
            if (match) {
              return `page-${match[1]}`;
            }
          }

          // Components by type
          if (id.includes("/components/") && id.includes("Gallery")) {
            return "gallery";
          }
          if (
            (id.includes("/components/") && id.includes("3D")) ||
            id.includes("Model")
          ) {
            return "models";
          }

          // Vendor libraries
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        // Optimize chunk sizes
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId
                .split("/")
                .pop()
                .replace(".jsx", "")
                .replace(".js", "")
            : "chunk";
          return `js/${facadeModuleId}-[hash].js`;
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
