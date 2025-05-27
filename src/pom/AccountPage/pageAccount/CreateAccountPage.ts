import { Locator, Page, expect } from '@playwright/test'
import {
    CountryNames,
    CreateAccount,
    TitleCheckbox
} from '../contractAccountPage/CreateAccountContract'
import dataQaIds from '../../../../dataQaIds'

export class AccountPage {
    page: Page
    accountTitles: Locator
    titleMrCheckbox: Locator
    titleMrsCheckbox: Locator
    nameInput: Locator
    emailInput: Locator
    passwordInput: Locator
    dateOfBirthInput: Locator
    monthOfBirthInput: Locator
    yearOfBirthInput: Locator
    signUpNewsletterCheckbox: Locator
    specialOfferCheckbox: Locator
    firstNameInput: Locator
    lastNameInput: Locator
    companyInput: Locator
    addressInput: Locator
    address2Input: Locator
    countryInput: Locator
    stateInput: Locator
    cityInput: Locator
    zipCodeInput: Locator
    mobileNumberInput: Locator
    createAccountButton: Locator

    constructor(data: CreateAccount) {
        this.page = data.page
        const form: Locator = data.page.locator('form')
        this.accountTitles = this.page.locator('h2.title.text-center')
        this.titleMrCheckbox = form.locator('#id_gender1')
        this.titleMrsCheckbox = form.locator('#id_gender2')
        this.nameInput = form.getByTestId(dataQaIds.ACCOUNTS.NAME)
        this.emailInput = form.getByTestId(dataQaIds.ACCOUNTS.EMAIL)
        this.passwordInput = form.getByTestId(dataQaIds.ACCOUNTS.PASSWORD)
        this.dateOfBirthInput = form.getByTestId(dataQaIds.ACCOUNTS.DAYS)
        this.monthOfBirthInput = form.getByTestId(dataQaIds.ACCOUNTS.MONTHS)
        this.yearOfBirthInput = form.getByTestId(dataQaIds.ACCOUNTS.YEARS)
        this.signUpNewsletterCheckbox = form.locator('#newsletter')
        this.specialOfferCheckbox = form.locator('#optin')
        this.firstNameInput = form.getByTestId(dataQaIds.ACCOUNTS.FIRST_NAME)
        this.lastNameInput = form.getByTestId(dataQaIds.ACCOUNTS.LAST_NAME)
        this.companyInput = form.getByTestId(dataQaIds.ACCOUNTS.COMPANY)
        this.addressInput = form.getByTestId(dataQaIds.ACCOUNTS.ADDRESS)
        this.address2Input = form.getByTestId(dataQaIds.ACCOUNTS.ADDRESS2)
        this.countryInput = form.getByTestId(dataQaIds.ACCOUNTS.COUNTRY)
        this.stateInput = form.getByTestId(dataQaIds.ACCOUNTS.STATE)
        this.cityInput = form.getByTestId(dataQaIds.ACCOUNTS.CITY)
        this.zipCodeInput = form.getByTestId(dataQaIds.ACCOUNTS.ZIP_CODE)
        this.mobileNumberInput = form.getByTestId(
            dataQaIds.ACCOUNTS.MOBILE_NUMBER
        )
        this.createAccountButton = form.getByTestId(
            dataQaIds.ACCOUNTS.CREATE_ACCOUNT_BTN
        )
    }

    async accountRegistration(data: CreateAccount) {
        await this.selectTitle(data.title)
        await this.fillName(data.name)
        await this.fillPassword(data.password)
        await this.selectDay(data.dateOfBirth.toString())
        await this.selectMonth(data.monthOfBirth)
        await this.selectYear(data.yearOfBirth.toString())
        await this.toggleSignUpNewsletterState(data.signUpNewsletter)
        await this.toggleSpecialOfferState(data.specialOffer)
        await this.fillFirstName(data.firstName)
        await this.fillLastName(data.lastName)
        await this.fillCompany(data.company)
        await this.fillAddress(data.address)
        await this.fillAddress2(data.address2)
        await this.selectCountry(data.country)
        await this.selectState(data.state)
        await this.fillCity(data.city)
        await this.fillZipCode(data.zipCode)
        await this.fillMobileNumber(data.mobileNumber)
        await this.createAccountBtn()
    }

    async accountPage() {
        await expect(this.accountTitles.first()).toHaveText(
            'Enter Account Information'
        )
    }

    async fillName(name: string) {
        await this.nameInput.fill(name)
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email)
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password)
    }

    async selectDay(day: string) {
        await this.dateOfBirthInput.selectOption(day)
    }

    async selectMonth(month: string) {
        await this.monthOfBirthInput.selectOption(month)
    }

    async selectYear(year: string) {
        await this.yearOfBirthInput.selectOption(year)
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName)
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName)
    }

    async fillCompany(company: string) {
        await this.companyInput.fill(company)
    }

    async fillAddress(address: string) {
        await this.addressInput.fill(address)
    }

    async fillAddress2(address2: string) {
        await this.address2Input.fill(address2)
    }

    async selectCountry(country: CountryNames) {
        await this.countryInput.waitFor({ state: 'visible', timeout: 60000 })
        await this.countryInput.waitFor({ state: 'attached' })
        await this.countryInput.selectOption({ label: country })
    }

    async selectState(state: string) {
        await this.stateInput.fill(state)
    }

    async fillCity(city: string) {
        await this.cityInput.fill(city)
    }

    async fillZipCode(zipCode: string) {
        await this.zipCodeInput.fill(zipCode)
    }

    async fillMobileNumber(mobileNumber: string) {
        await this.mobileNumberInput.fill(mobileNumber)
    }

    async createAccountBtn() {
        await expect(this.createAccountButton).toBeEnabled()
        await this.createAccountButton.click()
    }

    async selectTitle(title: TitleCheckbox) {
        switch (title) {
            case 'Mr':
                if (!(await this.titleMrCheckbox.isChecked())) {
                    await this.titleMrCheckbox.check()
                }
                break
            case 'Mrs':
                if (!(await this.titleMrsCheckbox.isChecked())) {
                    await this.titleMrsCheckbox.check()
                }
                break
            default:
                throw new Error(`Invalid title option provided: ${title}`)
        }
    }

    async toggleSignUpNewsletterState(selectNewsletter: boolean) {
        const isChecked: boolean =
            await this.signUpNewsletterCheckbox.isChecked()

        if (selectNewsletter && !isChecked) {
            await this.signUpNewsletterCheckbox.check()
        } else if (!selectNewsletter && isChecked) {
            await this.signUpNewsletterCheckbox.uncheck()
        }

        const finalState: boolean =
            await this.signUpNewsletterCheckbox.isChecked()
        expect(finalState).toBe(selectNewsletter)
    }

    async toggleSpecialOfferState(specialOffer: boolean) {
        const isChecked: boolean = await this.specialOfferCheckbox.isChecked()

        if (specialOffer && !isChecked) {
            await this.specialOfferCheckbox.check()
        } else if (!specialOffer && isChecked) {
            await this.specialOfferCheckbox.uncheck()
        }

        const finalState: boolean = await this.specialOfferCheckbox.isChecked()
        expect(finalState).toBe(specialOffer)
    }
}
