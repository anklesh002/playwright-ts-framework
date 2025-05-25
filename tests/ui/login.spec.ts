import { test } from '../../utils/hooks';
import { config } from '../../config';
import { LoginPage } from '../../pageObjects/loginPage';

test('Login UI Test', { tag: ['@smoke', '@LoginFeature' ] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.goto();
  await loginPage.fillUserName(config.username);
  await loginPage.fillPassword(config.password);
  await loginPage.clickLoginLink();
  await loginPage.assertHomePAgeLogo('Swag Labs');
});