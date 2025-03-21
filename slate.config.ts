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
