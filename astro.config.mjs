// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.saludcbo.com',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Mirrors public/_redirects, which serves these as real 301s on Cloudflare
  // Pages. Astro's own redirects only exist to keep `astro dev` and
  // `astro preview` consistent with production; in static builds they emit
  // meta-refresh stubs that Cloudflare never serves, because _redirects rules
  // are always applied regardless of whether an asset matches.
  redirects: {
    '/entrenamiento': '/servicios/entrenamiento',
    '/entrenamiento-personal': '/servicios/entrenamiento',
    '/entrenamiento-gruposreducidos': '/servicios/entrenamiento',
    '/entrenamento-online': '/servicios/entrenamiento',
    '/fisioterapia': '/servicios/fisioterapia',
    '/nutricion': '/servicios/nutricion',
    '/nosotros': '/equipo',
    '/empresa-saludable': '/',
    '/politica-de-cookies': '/cookies',
    '/politica-de-privacidad': '/privacidad',
    '/en/training': '/en/services/training',
    '/en/personal-training': '/en/services/training',
    '/en/small-group-training': '/en/services/training',
    '/en/online-training': '/en/services/training',
    '/en/physiotherapy': '/en/services/physiotherapy',
    '/en/nutrition': '/en/services/nutrition',
    '/en/us': '/en/equipo',
    '/en/healthy-company': '/en',
  },
});
