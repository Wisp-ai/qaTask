import { Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { generateEmailWithAlphanumeric } from '../../../utils/string.util'

export class CreateLogin {
    page: Page
    email: string = ''
    password: string = ''

    constructor(page: Page) {
        this.page = page
        this.email = generateEmailWithAlphanumeric(
            `${faker.string.alphanumeric({
                length: { min: 5, max: 10 }
            })}${faker.internet.email()}`
        )
        this.password = faker.internet.password()
    }
}
