import envConfig from './environmentVariablesConfig'
const currentEnvironment = envConfig.env || 'development'

const environments = {
    development: {
        baseUrl: envConfig.devUrl
    },
    staging: {
        baseUrl: envConfig.stageUrl
    }
}

if (!environments[currentEnvironment]) {
    throw new Error(`No environment settings found for ${currentEnvironment}`)
}

export const EnvironmentConfig = environments[currentEnvironment]
