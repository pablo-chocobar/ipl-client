import { defineConfig , loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

const env = loadEnv(process.cwd(), '')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  define: {
      'process.env.POSTGRES_URL': JSON.stringify(env.POSTGRES_URL),
      'process.env.POSTGRES_URL_NO_SSL': JSON.stringify(env.POSTGRES_URL_NO_SSL),
      'process.env.POSTGRES_URL_NON_POOLING': JSON.stringify(env.POSTGRES_URL_NON_POOLING),
      'process.env.POSTGRES_USER': JSON.stringify(env.POSTGRES_USER),
      'process.env.POSTGRES_HOST': JSON.stringify(env.POSTGRES_HOST),
      'process.env.POSTGRES_PASSWORD': JSON.stringify(env.POSTGRES_PASSWORD),
      'process.env.POSTGRES_DATABASE': JSON.stringify(env.POSTGRES_DATABASE),

      'process.env.VITE_POSTGRES_URL': JSON.stringify(env.VITE_POSTGRES_URL),
      'process.env.VITE_POSTGRES_URL_NO_SSL': JSON.stringify(env.VITE_POSTGRES_URL_NO_SSL),
      'process.env.VITE_POSTGRES_URL_NON_POOLING': JSON.stringify(env.VITE_POSTGRES_URL_NON_POOLING),
      'process.env.VITE_POSTGRES_USER': JSON.stringify(env.VITE_POSTGRES_USER),
      'process.env.VITE_POSTGRES_HOST': JSON.stringify(env.VITE_POSTGRES_HOST),
      'process.env.VITE_POSTGRES_PASSWORD': JSON.stringify(env.VITE_POSTGRES_PASSWORD),
      'process.env.VITE_POSTGRES_DATABASE': JSON.stringify(env.VITE_POSTGRES_DATABASE),

      'process.env.__VITE_POSTGRES_URL__': JSON.stringify(env.VITE_POSTGRES_URL),
      'process.env.__VITE_POSTGRES_URL_NO_SSL__': JSON.stringify(env.VITE_POSTGRES_URL_NO_SSL),
      'process.env.__VITE_POSTGRES_URL_NON_POOLING__': JSON.stringify(env.VITE_POSTGRES_URL_NON_POOLING),
      'process.env.__VITE_POSTGRES_USER__': JSON.stringify(env.VITE_POSTGRES_USER),
      'process.env.__VITE_POSTGRES_HOST__': JSON.stringify(env.VITE_POSTGRES_HOST),
      'process.env.__VITE_POSTGRES_PASSWORD__': JSON.stringify(env.VITE_POSTGRES_PASSWORD),
      'process.env.__VITE_POSTGRES_DATABASE__': JSON.stringify(env.VITE_POSTGRES_DATABASE),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
