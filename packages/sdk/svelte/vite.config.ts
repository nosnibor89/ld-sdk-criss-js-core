import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit(), svelteTesting()],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'src/lib'),
    },
  },
  test: {
    include: ['__tests__/**/*.{test,spec}.{js,ts,svelte}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    coverage: {
      // exclude config files and example project (it has its own tests)
      exclude: ['*.config.{ts,js}', 'example', ...coverageConfigDefaults.exclude],
    },
  },
});
