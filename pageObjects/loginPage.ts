import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config';
export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly appLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.appLogo = page.locator('.app_logo');
    }

    async goto() {
        await this.page.goto('/');
    }
    
    async gotoUserLoginPage() {
        await this.page.goto(config.BASE_USER_URL);
    }

    async fillUserName(text: string) {
        await this.userName.fill(text);
    }

    async fillPassword(text: string) {
        await this.password.fill(text);
    }
    async clickLoginLink() {
        await this.loginButton.click();
    }

    async assertHomePAgeLogo(text: string) {
        await expect(this.appLogo).toContainText(text);
    }
}