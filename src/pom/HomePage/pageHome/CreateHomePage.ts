import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
    page: Page
    signupLoginLink: Locator
    logoutLink: Locator
    homeLink: Locator
    productLink: Locator

    constructor(page: Page) {
        this.page = page
        this.signupLoginLink = page.locator('a:has-text("Signup / Login")')
        this.logoutLink = page.locator('a:has-text("Logout")')
        this.homeLink = page.locator('a:has-text("Home")')
        this.productLink = page.locator('a[href="/products"]')
    }

    async goToSignupLoginPage() {
        await this.signupLoginLink.click()
        await this.page.waitForURL(/\/login/)
    }

    async goToLogOutLink() {
        await expect(this.logoutLink).toBeVisible()
        await this.logoutLink.click()
    }

    async goToHomePage() {
        await this.homeLink.click()
        await this.page.waitForURL('/')
    }

    async goToProductPage() {
        await this.productLink.click()
        await this.page.waitForURL('/products')
    }

    async verifyHomePage() {
        expect(this.page).toHaveTitle(/Automation Exercise/)
    }

    async verifyLoggedInUser(username: string) {
        const loggedInLocator: Locator = this.page.locator('a', {
            hasText: `Logged in as ${username}`
        })
        await expect(loggedInLocator).toBeVisible()
    }
}
