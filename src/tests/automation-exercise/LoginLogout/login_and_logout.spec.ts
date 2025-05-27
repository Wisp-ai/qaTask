import { Page, expect } from '@playwright/test'
import { test } from '../../../pageFixture/MultiPageFixtures'
import { faker } from '@faker-js/faker'
import { generateEmailWithAlphanumeric } from '../../../utils/string.util'

let automationExercisePage: Page

let name: string
let emailAddress: string
let password: string

test.describe('Test Login and Logout Functionality', () => {
    test.beforeEach(
        async ({
            page,
            homePage,
            contractSignUp,
            signUpPage,
            contractAccount,
            createAccountPage,
            request
        }) => {
            await page.goto('/')
            automationExercisePage = page

            name = faker.person.firstName()
            emailAddress = generateEmailWithAlphanumeric(
                `${faker.string.alphanumeric({
                    length: { min: 5, max: 10 }
                })}${faker.internet.email()}`
            )
            password = faker.internet.password()

            contractSignUp.name = name
            contractSignUp.email = emailAddress
            contractAccount.password = password
            contractAccount.name = name

            await homePage.verifyHomePage()
            await signUpPage.signUp(contractSignUp)
            expect(automationExercisePage.url()).toContain('/signup')

            await createAccountPage.accountPage()
            await createAccountPage.accountRegistration(contractAccount)
            await automationExercisePage.waitForURL('/account_created')
            await expect(automationExercisePage).toHaveURL(/\/account_created$/)
            await expect(createAccountPage.accountTitles).toHaveText(
                'Account Created!'
            )

            await homePage.goToHomePage()
            await homePage.goToLogOutLink()
        }
    )

    test.afterEach(async ({ page }) => {
        automationExercisePage = page
        await automationExercisePage.close()
    })

    test('Validate the login processes', async ({
        contractLogin,
        loginPage,
        homePage
    }) => {
        contractLogin.email = emailAddress
        contractLogin.password = password

        await loginPage.login(contractLogin)
        await homePage.verifyLoggedInUser(name)
    })

    test('Validate the logout processes', async ({
        contractLogin,
        loginPage,
        homePage
    }) => {
        contractLogin.email = emailAddress
        contractLogin.password = password

        await loginPage.login(contractLogin)
        await homePage.verifyLoggedInUser(name)
        await homePage.goToLogOutLink()
        await expect(loginPage.loginPageName).toBeVisible()
    })
})
