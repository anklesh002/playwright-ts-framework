import { test, expect } from '@playwright/test';
import { RecordPage } from '../../pageObjects/recordPage';

test('Record test', async ({ page }) => {
    const recordPage = new RecordPage(page);
    await recordPage.goto();
    await recordPage.fillTodoInput('Right click');
    await recordPage.clickRemoLink();
    await recordPage.assertArticleContainsText('👋 Hola!');
});