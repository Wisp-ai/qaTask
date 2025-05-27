import { Locator, Page } from '@playwright/test'

export class CartPage {
    page: Page
    cartTable: Locator
    cartItemRow: Locator
    cartProductName: Locator
    cartProductQuantity: Locator
    cartProductPrice: Locator
    cartProductTotalPrice: Locator

    constructor(page: Page) {
        this.page = page
        this.cartTable = this.page.locator('#cart_info_table tbody')
        this.cartItemRow = this.page.locator('tr')
        this.cartProductName = this.page.locator('.cart_description p')
        this.cartProductQuantity = this.page.locator('.cart_quantity input')
        this.cartProductPrice = this.page.locator('.cart_price p')
        this.cartProductTotalPrice = this.page.locator('.cart_total_price p')
    }

    async isCartEmpty() {
        const emptyCartLocator: Locator = this.page.locator(
            '#cart_info_table .empty_cart'
        )
        return await emptyCartLocator.isVisible()
    }

    async getCartProductName(expectedName: string) {
        const productRow: Locator = this.cartTable.locator(
            `tr:has-text("${expectedName}")`
        )

        const productName: string | null = await productRow
            .locator('.cart_description a')
            .textContent()

        if (!productName) {
            throw new Error('Failed to fetch product name from cart')
        }

        return productName.trim()
    }

    async getCartProductPrice(expectedName: string) {
        const productRow: Locator = this.cartTable.locator(
            `tr:has-text("${expectedName}")`
        )
        const productPrice: string | null = await productRow
            .locator('.cart_price p')
            .textContent()

        if (!productPrice) {
            throw new Error('Failed to fetch product price from cart')
        }

        return productPrice.trim()
    }

    async getCartProductQuantity(expectedName: string) {
        const productRow: Locator = this.cartTable.locator(
            `tr:has-text("${expectedName}")`
        )
        const quantity: string | null = await productRow
            .locator('.cart_quantity button')
            .textContent()

        if (!quantity) {
            throw new Error('Failed to fetch product quantity from cart')
        }

        return Number(quantity.trim())
    }
}
