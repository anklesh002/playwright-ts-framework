import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import os from 'os';
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
  // {
  //   name: 'API Tests',
  //   testMatch: 'tests/api/**/*.spec.ts',
  // },
  // {
  //   name: 'DB Tests',
  //   testMatch: 'tests/db/**/*.spec.ts',
  // },
];


const cpuCount = os.cpus().length;

export default defineConfig({
  // Set the number of worker processes dynamically.
  workers: cpuCount > 2 ? cpuCount - 1 : 1,
  // Use the environment variable to set the browser type
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
  // Advanced: Enable test sharding if needed.
    // If running on CI, you can set environment variables like SHARD_TOTAL and SHARD_INDEX.
    // Example: node playwright.config.ts --shard=2/0
    shard: process.env.SHARD_TOTAL && process.env.SHARD_INDEX ? {
        total: parseInt(process.env.SHARD_TOTAL, 10),
        shard: parseInt(process.env.SHARD_INDEX, 10)
    } : undefined,
    
});