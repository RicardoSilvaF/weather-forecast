import { defineConfig } from 'vite';
import envPlugin from 'vite-plugin-env';

export default defineConfig({
  plugins: [
    envPlugin({ 
      VITE_API_KEY: process.env.VITE_API_KEY, 
    }),
  ],
});
