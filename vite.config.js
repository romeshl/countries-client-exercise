import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    dedupe: ["preact"],
    alias: [
      { find: "react", replacement: "preact/compat" },
      { find: "react-dom", replacement: "preact/compat" },
      { find: "@preact/signals-react", replacement: "@preact/signals" },
    ],
  },
});
