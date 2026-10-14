import { defineConfig } from 'astro/config';

// Project page: https://pixeldroid19.github.io/kyty-web/
export default defineConfig({
  site: 'https://pixeldroid19.github.io',
  base: '/kyty-web',
  // Keep the markup exactly as authored (inline spacing in the hero/legal text depends on it)
  compressHTML: false,
});
