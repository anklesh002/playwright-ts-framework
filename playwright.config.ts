import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` });

const browserName = process.env.BROWSER || 'chromium'; // Default to chromium

const projects = [
  {
    name: 'UI Tests',
    use: {
      // baseURL: process.env.BASE_URL || 'https://example.testproject.io/web/',
      ...devices[browserName === 'chromium' ? 'Desktop Chrome' : browserName === 'firefox' ? 'Desktop Firefox' : 'Desktop Safari'],
    },
    testMatch: 'tests/ui/**/*.spec.ts',
  },
  {
    name: 'API Tests',
    testMatch: 'tests/api/**/*.spec.ts',
  },
  {
    name: 'DB Tests',
    testMatch: 'tests/db/**/*.spec.ts',
  },
];


export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [['html'], ['list'],["allure-playwright"]
  // ['@reportportal/agent-js-playwright']
],
  use: {
    trace: 'on-first-retry',
    video: 'on',
    screenshot: 'only-on-failure',
    baseURL: process.env.BASE_URL || 'https://example.testproject.io/web/',
  },
  projects: projects,
  outputDir: 'test-results/',
});