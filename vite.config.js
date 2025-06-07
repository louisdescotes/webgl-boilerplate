import path from 'path'
import glsl from 'vite-plugin-glsl'
import restart from 'vite-plugin-restart'

export default {
  root: 'src/',
  publicDir: '../static/',
  base: './',
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@shaders': path.resolve(__dirname, 'src/shaders'),
      '@animations': path.resolve(__dirname, 'src/animations'),
      '@classes': path.resolve(__dirname, 'src/classes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  plugins: [
    glsl(),
    restart({ restart: ['../static/**'] })
  ]
}
