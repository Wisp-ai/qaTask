import { Locator, Page, expect } from '@playwright/test'
import { CreateLogin } from '../contractLogin/CreateLoginContract'
import { CreateSignUp } from '../contractSignUp/CreateSignUpContract'
import { HomePage } from '../../HomePage/pageHome/CreateHomePage'
import dataQaIds from '../../../../dataQaIds'

export class LoginSignUpPage extends HomePage {
    page: Page
    loginEmailInput: Locator
    loginPasswordInput: Locator
    loginButton: Locator
    signupNameInput: Locator
    signupEmailInput: Locator
    signupButton: Locator
    loginPageName: Locator
    signUpPageName: Locator

    constructor(data: CreateLogin | CreateSignUp) {
        super(data.page)
        this.page = data.page
        const form = data.page.locator('form')
        this.loginEmailInput = form.getByTestId(dataQaIds.LOGIN.EMAIL)
        this.loginPasswordInput = form.getByTestId(dataQaIds.LOGIN.PASSWORD)
        this.loginButton = form.getByTestId(dataQaIds.LOGIN.CREATE_LOGIN_BTN)
        this.signupNameInput = form.getByTestId(dataQaIds.SIGN_UP.NAME)
        this.signupEmailInput = form.getByTestId(dataQaIds.SIGN_UP.EMAIL)
        this.signupButton = form.getByTestId(
            dataQaIds.SIGN_UP.CREATE_SIGNUP_BTN
        )
        this.loginPageName = this.page
            .locator('.login-form h2')
            .filter({ hasText: 'Login to your account' })
        this.signUpPageName = this.page
            .locator('.signup-form h2')
            .filter({ hasText: 'New User Signup!' })
    }

    async login(data: CreateLogin) {
        await this.goToSignupLoginPage()
        await expect(this.loginPageName).toBeVisible()
        await this.fillLoginEmail(data.email)
        await this.fillLoginPassword(data.password)
        await this.clickLoginButton()
    }

    async signUp(data: CreateSignUp) {
        await this.goToSignupLoginPage()
        await expect(this.signUpPageName).toBeVisible()
        await this.fillSignUpName(data.name)
        await this.fillSignUpEmail(data.email)
        await this.clickSignUpButton()
    }

    async clickLoginButton() {
        await expect(this.loginButton).toBeEnabled()
        await this.loginButton.click()
    }

    async clickSignUpButton() {
        await expect(this.signupButton).toBeEnabled()
        await this.signupButton.click()
    }

    async fillLoginEmail(email: string) {
        await this.loginEmailInput.fill(email)
    }

    async fillLoginPassword(password: string) {
        await this.loginPasswordInput.fill(password)
    }

    async fillSignUpName(name: string) {
        await this.signupNameInput.fill(name)
    }

    async fillSignUpEmail(email: string) {
        await this.signupEmailInput.fill(email)
    }
}
