import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://192.168.39.199:3000",
    },
  },
  base: "/Survy/",
  plugins: [react()],
});
