import { faker } from '@faker-js/faker'

export function generateEmailWithAlphanumeric(baseEmail: string): string {
    const [name, domain] = baseEmail.split('@')
    const length: number = Math.floor(Math.random() * 26)
    const alphanumeric: string = faker.string.alphanumeric(length)
    return `${name}${alphanumeric}@${domain}`
}
