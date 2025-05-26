import { test } from '../../utils/hooks';
import { config } from '../../config';
import { LoginPage } from '../../pageObjects/userLoginPage';
import logger from '../../utils/logUtil';

test('Login UI Test', { tag: ['@smoke', '@HostedAI' ] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  logger.info('Starting Login UI Test');
  loginPage.gotoUserLoginPage();
  logger.info('Navigated to login page');
  console.log('Base URL:', config.BASE_USER_URL);
  logger.info(`username: ${config.USER_UI_USERNAME}`);
  await loginPage.fillUserName(config.USER_UI_USERNAME);
  logger.info('Filled username');
  await loginPage.fillPassword(config.USER_UI_PASSWORD);
  logger.info('Filled password');
  await loginPage.clickLoginLink();
  logger.info('Clicked login button');
  // Assert that the home page logo is displayed
  await loginPage.assertHomePageLogo();
  logger.info('Home page logo is displayed');
  logger.info('Login UI Test completed successfully');
  await page.close();
  logger.info('Page closed after test');
  logger.info('Test finished');
  logger.info('----------------------------------------');
});