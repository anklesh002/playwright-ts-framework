import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    console.log('🚀 Test started');
    await use(page);
    console.log('✅ Test finished');
  }
});

test.beforeEach(async ({}, testInfo) => {
  console.log(`🔍 Starting test: ${testInfo.title}`);
});

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log(`❌ Test failed: ${testInfo.title}`);
  } else {
    console.log(`✔️ Test passed: ${testInfo.title}`);
  }
});
