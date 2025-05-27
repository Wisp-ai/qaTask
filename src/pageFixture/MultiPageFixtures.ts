import { test as baseTest } from '@playwright/test'
import * as pageFixtures from './MultiPageFixturesDefinitions'

export const test = baseTest.extend<pageFixtures.PageFixtures>({
    contractLogin: async ({ page }, use) => {
        const contract = new pageFixtures.CreateLogin(page)
        await use(contract)
    },
    loginPage: async ({ contractLogin }, use) => {
        await use(new pageFixtures.LoginSignUpPage(contractLogin))
    },
    contractSignUp: async ({ page }, use) => {
        const contract = new pageFixtures.CreateSignUp(page)
        await use(contract)
    },
    signUpPage: async ({ contractSignUp }, use) => {
        const signUpPage = new pageFixtures.LoginSignUpPage(contractSignUp)
        await use(signUpPage)
    },
    contractAccount: async ({ page }, use) => {
        const contract = new pageFixtures.CreateAccount(page)
        await use(contract)
    },
    createAccountPage: async ({ contractAccount }, use) => {
        const accountPage = new pageFixtures.AccountPage(contractAccount)
        await use(accountPage)
    },
    homePage: async ({ page }, use) => {
        const homePage = new pageFixtures.HomePage(page)
        await use(homePage)
    },
    productPage: async ({ page }, use) => {
        const productPage = new pageFixtures.ProductPage(page)
        await use(productPage)
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new pageFixtures.CartPage(page)
        await use(cartPage)
    }
})
