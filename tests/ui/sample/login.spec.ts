import { test } from '../../../utils/hooks';
import { config } from '../../../config';
import { LoginPage } from '../../../pageObjects/loginPage';
import logger from '../../../utils/logUtil';

test('Login UI Test', { tag: ['@smoke', '@LoginFeature' ] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  logger.info('Starting Login UI Test');
  loginPage.goto();
  logger.info('Navigated to login page');
  await loginPage.fillUserName(config.username);
  logger.info('Filled username');
  await loginPage.fillPassword(config.password);
  logger.info('Filled password');
  await loginPage.clickLoginLink();
  logger.info('Clicked login button');
  // Assert that the home page logo is displayed
  await loginPage.assertHomePAgeLogo('Swag Labs');
  logger.info('Home page logo is displayed');
  logger.info('Login UI Test completed successfully');
  await page.close();
  logger.info('Page closed after test');
  logger.info('Test finished');
  logger.info('----------------------------------------');
});