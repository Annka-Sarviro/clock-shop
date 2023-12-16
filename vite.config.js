import { defineConfig } from 'vite';
import posthtml from '@vituum/vite-plugin-posthtml';

export default defineConfig({
  root: './src',
  base: './',
  plugins: [posthtml()],
  css: {
    hot: true,
  },
});
