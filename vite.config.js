import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import './node_modules/slick-carousel/slick/slick.css';
          @import './node_modules/slick-carousel/slick/slick-theme.css';
        `,
      },
    },
  },
});
