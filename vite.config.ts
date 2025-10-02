import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Fast Forum PWA',
        short_name: 'Forum',
        description: 'A modern, fast, feature-sliced forum Progressive Web App.',
        theme_color: '#23272f',
        background_color: '#1a1a1a',
        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '256.png',
            sizes: '256x256',
            type: 'image/png',
          }
        ]
      }
    })
  ],
})
