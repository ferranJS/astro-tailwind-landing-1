import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://ferranjs.github.io/astro-tailwind-landing-1/",
  base: "/astro-tailwind-landing-1",
})
