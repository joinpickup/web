import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind()],
  experimental: {
    redirects: true,
  },
  redirects: {
    '/events/hunt/rsvp': 'https://forms.gle/MpAs1eabZ1NCMz2k6'
  }
})