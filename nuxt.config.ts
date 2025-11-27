// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite';

const siteTitle = 'Jair Hernández | NetSuite & Full-Stack Developer';
const siteDescription =
  'Senior NetSuite Developer & Full-Stack Web Developer. SuiteScript, SuiteApps, CI/CD y aplicaciones web modernas.';
const siteUrl = 'https://jairhdez.dev/portfolio/';
const ogImage = `${siteUrl}jh-logo.png`;

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 👇 Tu CSS global
  css: ['~/assets/css/main.css'],

  // 👇 Tailwind v4 como plugin de Vite
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL: '/portfolio/',
    head: {
      title: siteTitle,
      meta: [
        {
          name: 'description',
          content: siteDescription,
        },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'jh-logo.png' },
        { rel: 'canonical', href: siteUrl },
      ],
    },
  },
  nitro: {
    preset: 'github-pages',
  },
});
