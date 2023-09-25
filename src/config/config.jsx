// vite.config.js
import { defineConfig } from 'vite';
import envPlugin from 'vite-plugin-env';

export default defineConfig({
  // ... outras configurações do Vite ...

  plugins: [
    envPlugin({ 
      VITE_API_KEY: process.env.VITE_API_KEY, 
    }),
  ],
});
