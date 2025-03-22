/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://blog.nipunh.com',
  avatar: '/avatar.png',
  title: "Nipun's blog",
  description: 'Keeping it simple',
  lastModified: true,
  readTime: true,
  algolia: {
    appId: import.meta.env.ALGOLIA_APP_ID,
    apiKey: import.meta.env.ALGOLIA_API_KEY,
    indexName: import.meta.env.ALGOLIA_INDEX_NAME,
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
