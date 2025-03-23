/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://blog.nipunh.com',
  avatar: '/avatar.webp',
  title: "Nipun's blog",
  description: 'Keeping it simple',
  lastModified: true,
  readTime: true,
  algolia: {
    appId: 'G2X0NK0E2R',
    apiKey: 'a3c407187fc5f7651f3929b5d00df200',
    indexName: 'blog_nipunh_com_g2x0nk0e2r_pages',
  },
  footer: {
    copyright: '© 2025 Nipun Haldar',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/nipun24',
    },
  ],
});
