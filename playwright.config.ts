import { defineConfig } from '@playwright/test';
const previewPort = 4322;
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  workers: 2,
  use: {
    baseURL: `http://127.0.0.1:${previewPort}`,
    launchOptions: {
      executablePath: process.env.CHROME_PATH || undefined,
      args: ['--no-sandbox'],
    },
  },
  webServer: {
    command: `npm run preview -- --port ${previewPort} --ignore-lock`,
    url: `http://127.0.0.1:${previewPort}${process.env.BASE_PATH || '/'}`,
    reuseExistingServer: false,
  },
});
