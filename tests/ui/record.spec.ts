import { test, expect } from '@playwright/test';
import { RecordPage } from '../../pageObjects/recordPage';
import logger from '../../utils/logUtil';

test('Record test', async ({ page }) => {
    logger.info('Starting Record Test');
    logger.info('Navigating to Record Page');
    // Create an instance of RecordPage
    const recordPage = new RecordPage(page);
    // Navigate to the Record page
    await recordPage.goto();
    logger.info('Navigated to Record Page');
    // Fill the todo input with 'Right click'
    await recordPage.fillTodoInput('Right click');
    logger.info('Filled todo input with "Right click"');
    // Click the Remo link
    await recordPage.clickRemoLink();
    logger.info('Clicked Remo link');
    // Assert that the article contains the text '👋 Hola!'
    await recordPage.assertArticleContainsText('👋 Hola!');
    logger.info('Article contains the text "👋 Hola!"')
    logger.info('Record Test completed successfully');
    await page.close();
    logger.info('Page closed after test');
    logger.info('Test finished');
    logger.info('----------------------------------------');
});