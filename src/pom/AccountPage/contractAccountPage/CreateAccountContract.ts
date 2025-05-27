import { Page } from '@playwright/test'
import { faker } from '@faker-js/faker'

export type TitleCheckbox = 'Mr' | 'Mrs'

export type CountryNames =
    | 'India'
    | 'United States'
    | 'Canada'
    | 'Australia'
    | 'Israel'
    | 'New Zealand'
    | 'Singapore'

export class CreateAccount {
    page: Page
    title: TitleCheckbox
    name: string = ''
    password: string = ''
    dateOfBirth: number = 0
    monthOfBirth: string = ''
    yearOfBirth: number = 0
    signUpNewsletter: boolean
    specialOffer: boolean
    firstName: string = ''
    lastName: string = ''
    company: string = ''
    address: string = ''
    address2: string = ''
    country: CountryNames
    state: string = ''
    city: string = ''
    zipCode: string = ''
    mobileNumber: string = ''

    constructor(page: Page) {
        this.page = page
        this.title = 'Mr'
        this.name = faker.internet.userName()
        this.password = faker.internet.password()
        this.dateOfBirth = faker.number.int({ min: 1, max: 31 })
        this.monthOfBirth = faker.date.month()
        this.yearOfBirth = faker.number.int({ min: 1930, max: 2006 })
        this.signUpNewsletter = true
        this.specialOffer = true
        this.firstName = faker.person.firstName()
        this.lastName = faker.person.lastName()
        this.company = faker.company.name()
        this.address = faker.location.streetAddress()
        this.address2 = faker.location.secondaryAddress()
        this.country = 'Australia'
        this.state = faker.location.state()
        this.city = faker.location.city()
        this.zipCode = faker.location.zipCode()
        this.mobileNumber = faker.phone.number()
    }
}
