import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()]
});