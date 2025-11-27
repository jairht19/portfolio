// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite';

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
    head: {
      title: 'Jair Hernández | NetSuite & Full-Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Senior NetSuite Developer & Full-Stack Web Developer. SuiteScript, SuiteApps, CI/CD y aplicaciones web modernas.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/jh-logo.png' }],
    },
  },
});