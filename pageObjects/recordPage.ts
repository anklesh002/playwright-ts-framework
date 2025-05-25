import { Page, Locator, expect } from '@playwright/test';

export class RecordPage {
    readonly page: Page;
    readonly todoInput: Locator;
    readonly remoLink: Locator;
    readonly article: Locator;

    constructor(page: Page) {
        this.page = page;
        this.todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });
        this.remoLink = page.getByRole('link', { name: 'Remo H. Jansen' });
        this.article = page.getByRole('article');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/#/');
    }

    async fillTodoInput(text: string) {
        await this.todoInput.fill(text);
    }

    async clickRemoLink() {
        await this.remoLink.click();
    }

    async assertArticleContainsText(text: string) {
        await expect(this.article).toContainText(text);
    }
}