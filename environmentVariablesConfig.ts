import * as dotenv from 'dotenv'
dotenv.config()

function getEnvVariable(name: string): string {
    const valueEnv: string | undefined = process.env[name]
    if (!valueEnv) {
        throw new Error(`Environment variable ${name} is not set`)
    }
    return valueEnv
}

interface EnvConfig {
    env: string
    devUrl: string
    stageUrl: string
}

const envConfig: EnvConfig = {
    env: getEnvVariable('ENV'),
    devUrl: getEnvVariable('DEV_URL'),
    stageUrl: getEnvVariable('STAGE_URL')
}

export default envConfig
