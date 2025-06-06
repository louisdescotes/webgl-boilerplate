import { defineConfig } from 'vite';
import path from 'path';
import glsl from 'vite-plugin-glsl';


export default defineConfig({
  plugins: [glsl()],
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './app'),
      '@fonts': path.resolve(__dirname, './fonts'),
      '@shared': path.resolve(__dirname, './shared'),
      '@styles': path.resolve(__dirname, './styles'),
      '@animations': path.resolve(__dirname, './app/animations'),
      '@classes': path.resolve(__dirname, './app/classes'),
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@shaders': path.resolve(__dirname, './app/shaders'),
      '@utils': path.resolve(__dirname, './app/utils'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./styles/index.scss";`
      },
    },
  },
});
