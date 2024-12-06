<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
});
=======
})
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8
