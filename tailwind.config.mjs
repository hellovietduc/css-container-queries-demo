/** @type {import('tailwindcss').Config} */
import tailwindCssContainerQueriesPlugin from './src/bits/tailwindcss_container_queries_plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'tablet-portrait': '744px',
        'tablet-landscape': '1024px',
        desktop: '1440px',
      },
      containers: {
        'tablet-portrait': '744px',
        'tablet-landscape': '1024px',
        desktop: '1440px',
      },
    },
  },
  plugins: [tailwindCssContainerQueriesPlugin],
};
