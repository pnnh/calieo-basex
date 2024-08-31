// 解析配置信息
import dotenv from "dotenv";
import {IAppConfig} from "../common/config";

const result = dotenv.config({path: `.env.${process.env.NODE_ENV ?? 'development'}`})
if (result.error) {
    throw new Error(`解析配置出错: ${result.error}`)
}

function parseConfig(): IAppConfig {
    let port: number = parseInt(process.env.PORT ?? '')
    if (isNaN(port)) {
        port = 8004
    }
    const config = {
        ENV: process.env.NODE_ENV ?? 'development',
        PORT: port,
        SELF_URL: process.env.SELF_URL ?? 'http://localhost:8004'
    }
    if (!config.ENV) {
        throw new Error('ENV is required')
    }

    return config
}

export const serverConfig = parseConfig()


export async function serverGetAppConfig(): Promise<IAppConfig> {
    return serverConfig
}
