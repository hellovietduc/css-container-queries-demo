import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://css-container-queries-demo.duckwho.codes',
  integrations: [vue()],
});
