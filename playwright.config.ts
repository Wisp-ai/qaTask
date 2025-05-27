import { defineConfig, devices } from '@playwright/test'
import { EnvironmentConfig } from './environmentSettings'

export default defineConfig({
    testDir: 'src',
    fullyParallel: true,
    workers: 1,
    retries: process.env.CI ? 3 : 1,
    reporter: 'html',

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ],
    use: {
        baseURL: EnvironmentConfig.baseUrl,
        testIdAttribute: 'data-qa',
        browserName: 'chromium',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        headless: true,
        extraHTTPHeaders: {
            Accept: 'application/json',
            Origin: EnvironmentConfig.baseUrl
        }
    }
})
