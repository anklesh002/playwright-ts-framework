import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config';
export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly adminUserButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Enter email ID here' });
        this.password = page.getByRole('textbox', { name: 'Enter password here' });
        this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
        this.adminUserButton = page.getByRole('button', { name: 'H Default admin user' });        
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

    async assertHomePageLogo() {
        await expect(this.adminUserButton).toBeVisible();
    }
}