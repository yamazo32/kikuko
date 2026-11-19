// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeRaw from 'rehype-raw';
import rehypeBasePath from './plugins/rehype-base-path.js';

// 独自ドメインは直下（ルート）で運用するため、base は空文字列または "/" にします
const base = '/';

export default defineConfig({
  site: 'https://kikuko.info',
  // site: 'https://****.github.io',
  base,

  markdown: {
    rehypePlugins: [
      rehypeRaw,
      [rehypeBasePath, { base }],
    ],
  },

  integrations: [sitemap()],
});
