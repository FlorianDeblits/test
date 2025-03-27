import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  plugins: [
    ViteImageOptimizer({
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 60,
      },}),
  ]
}
