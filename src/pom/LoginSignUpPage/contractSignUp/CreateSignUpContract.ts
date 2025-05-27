import { Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { generateEmailWithAlphanumeric } from '../../../utils/string.util'

export class CreateSignUp {
    page: Page
    name: string = ''
    email: string = ''

    constructor(page: Page) {
        this.page = page
        this.name = faker.internet.userName()
        this.email = generateEmailWithAlphanumeric(
            `${faker.string.alphanumeric({
                length: { min: 5, max: 10 }
            })}${faker.internet.email()}`
        )
    }
}
