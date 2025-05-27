import { Locator, Page, expect } from '@playwright/test'

export class ProductPage {
    page: Page
    searchInput: Locator
    searchButton: Locator
    addToCartButton: Locator
    searchedProductTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.searchInput = page.locator('#search_product')
        this.searchButton = page.locator('#submit_search')
        this.searchedProductTitle = this.page.locator('h2.title.text-center')
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName)
        await expect(this.searchInput).toHaveValue(productName)
        await this.searchButton.click()
    }

    async checkSearchedProductTitle() {
        await this.page.waitForSelector('h2.title.text-center')
        await expect(this.searchedProductTitle).toHaveText('Searched Products')
    }

    async getProductName(productName: string) {
        const productCardSelector: string =
            this.getProductCardSelector(productName)
        const productCard: Locator = this.page.locator(productCardSelector)
        const productNameLocator: Locator = productCard
            .locator('p:first-of-type')
            .first()
        const name: string | null = await productNameLocator.textContent()

        if (!name) throw new Error('Failed to retrieve product name')
        return name.trim()
    }

    async getProductPrice(productName: string) {
        const productCardSelector: string =
            this.getProductCardSelector(productName)
        const productCard: Locator = this.page.locator(productCardSelector)
        const productPriceLocator: Locator = productCard.locator('h2').first()
        const price: string | null = await productPriceLocator.textContent()

        if (!price) throw new Error('Failed to retrieve product price')
        return price.trim()
    }

    getProductCardSelector(productName: string) {
        return `.single-products:has-text("${productName}")`
    }

    async addProductToCart(productName: string) {
        const productCardSelector: string =
            this.getProductCardSelector(productName)
        const productCard: Locator = this.page.locator(productCardSelector)
        const addToCartButton: Locator = productCard
            .locator('.btn-default.add-to-cart')
            .first()

        await addToCartButton.waitFor({ state: 'visible' })
        await addToCartButton.click()
    }

    async clickViewCart() {
        await this.page
            .locator('.modal-dialog .modal-content')
            .waitFor({ state: 'visible' })

        const viewCartButton: Locator = this.page.locator(
            '.modal-content a:has-text("View Cart")'
        )

        await viewCartButton.click()
    }
}
