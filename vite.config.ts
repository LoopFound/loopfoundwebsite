import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const chunkGroups: Record<string, string[]> = {
  vendor: ["react", "react-dom", "react-router-dom"],
  animation: ["gsap", "framer-motion"],
  ui: ["@radix-ui/react-dialog", "@radix-ui/react-tooltip", "@radix-ui/react-toast"],
};

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    // Localhost only by default; run `npm run dev:lan` to expose to the network.
    host: process.env.VITE_DEV_HOST ?? "localhost",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: isSsrBuild ? undefined : {
    rollupOptions: {
      output: {
        manualChunks(id) {
          for (const [chunk, pkgs] of Object.entries(chunkGroups)) {
            if (pkgs.some((pkg) => id.includes(`/node_modules/${pkg}/`))) return chunk;
          }
        },
      },
    },
  },
}));
