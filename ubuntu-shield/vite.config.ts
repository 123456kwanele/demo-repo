import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['safari-pinned-tab.svg'],
      manifest: {
        name: 'Ubuntu Shield',
        short_name: 'UbuntuShield',
        description: 'South African anti-fraud shield: check links, report scams, get alerts',
        theme_color: '#003d8f',
        background_color: '#0d0d0d',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'StaleWhileRevalidate' as const,
            options: { cacheName: 'static-resources' }
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/news'),
            handler: 'NetworkFirst' as const,
            options: { cacheName: 'news-api', networkTimeoutSeconds: 3 }
          }
        ]
      }
    })
  ],
})
