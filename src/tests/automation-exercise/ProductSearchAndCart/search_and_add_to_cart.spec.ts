import { Page, expect } from '@playwright/test'
import { test } from '../../../pageFixture/MultiPageFixtures'
import { getProductByName } from '../../../service/initiations'
import { Product } from '../../../types/typesProducts'

let automationExercisePage: Page

test.describe('Search and Add a Product to Cart', () => {
    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('/')
        await homePage.verifyHomePage()
        await homePage.goToProductPage()
        automationExercisePage = page
    })

    test.afterEach(async ({ page }) => {
        automationExercisePage = page
        await automationExercisePage.close()
    })

    test('Test the search functionality and cart behavior', async ({
        productPage,
        cartPage
    }) => {
        const product: Product = getProductByName('Premium Polo T-Shirts')

        await productPage.searchProduct(product.name)

        const productNameFromPage: string = await productPage.getProductName(
            product.name
        )
        const productPriceFromPage: string = await productPage.getProductPrice(
            product.name
        )

        expect(productNameFromPage).toBe(product.name)
        expect(productPriceFromPage).toBe(product.price)

        await productPage.addProductToCart(product.name)
        await productPage.clickViewCart()
        await expect(automationExercisePage).toHaveURL('/view_cart')

        const isCartEmpty: boolean = await cartPage.isCartEmpty()
        expect(isCartEmpty).toBeFalsy()

        const productNameFromCart: string = await cartPage.getCartProductName(
            product.name
        )
        const productPriceFromCart: string = await cartPage.getCartProductPrice(
            product.name
        )
        const productQuantityFromCart: number =
            await cartPage.getCartProductQuantity(product.name)

        expect(productNameFromCart).toBe(productNameFromPage)
        expect(productPriceFromCart).toBe(productPriceFromPage)
        expect(productQuantityFromCart).toBe(1)
        expect(productQuantityFromCart).toBe(product.quantity)
    })
})
