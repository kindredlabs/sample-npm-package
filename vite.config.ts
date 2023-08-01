import { defineConfig, loadEnv } from 'vite';
const { resolve } = require('path');

export default defineConfig({
  build: {
    sourcemap: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/index.ts')],
      name: '@metapals/sample-package',
      // the proper extensions will be added
      fileName: (format, entryName) => {
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
    },
  },
  test: {
    setupFiles: ['./setupTests.js'],
  },
})