import { Page, expect } from '@playwright/test'
import { test } from '../../../pageFixture/MultiPageFixtures'

let automationExercisePage: Page

test.describe('Validate User Registration Process', () => {
    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('/')
        await homePage.verifyHomePage()
        automationExercisePage = page
    })

    test.afterEach(async ({ page }) => {
        automationExercisePage = page
        await automationExercisePage.close()
    })

    test('Test the user registration flow', async ({
        contractSignUp,
        signUpPage,
        contractAccount,
        createAccountPage
    }) => {
        await signUpPage.signUp(contractSignUp)
        expect(automationExercisePage.url()).toContain('/signup')

        await createAccountPage.accountPage()

        await createAccountPage.accountRegistration(contractAccount)
        await automationExercisePage.waitForURL('/account_created')
        await expect(automationExercisePage).toHaveURL(/\/account_created$/)
        await expect(createAccountPage.accountTitles).toHaveText(
            'Account Created!'
        )
    })
})
