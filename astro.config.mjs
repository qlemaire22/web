import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

console.log(process.env.NODE_ENV)

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: cloudflare({ mode: "directory" }),
  experimental: {
    hybridOutput: true,
  },
  vite: {
    build: {
      minify: false // makes wrangler debugging possible
    }
  }
});
