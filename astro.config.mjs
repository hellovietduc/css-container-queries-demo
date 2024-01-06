import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://css-container-queries-demo.duckwho.codes',
  integrations: [vue(), tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    defaultStrategy: 'viewport',
  },
});
