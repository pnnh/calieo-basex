import type {Request, Response} from "express";
import * as fs from "node:fs";
import * as path from "node:path";
import express, {NextFunction} from "express";
import cors from 'cors'
import {cbHomeServer, CBHomeServer} from "./components/server/home";
import stripAnsi from "strip-ansi";

function handleErrors(
    handlerFunc: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | undefined | void>) {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handlerFunc(req, res);
        } catch (e) {
            next(e);
        }
    }
}

export function prepareServer() {
    const server = express();

    // 解决跨域问题
    server.use(cors({
        credentials: true,
        origin: true,
    }));
    server.use(express.json());

    server.get("/", handleErrors(handleHome));
    server.use("/build", express.static('build'))

    // if (process.env.NODE_ENV === 'development') {
    //     server.use(proxy('http://localhost:5173'))
    //     // server.use('/src', express.static('src'))
    // } else {
    //     server.use(express.static('dist'))
    // }


    server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        const message = stripAnsi(err.stack || err.message || 'Unknown error')
        res.status(500).send({
            code: 500,
            message: message
        })
    })
    return server
}

export default async function serverAppToString(url: string) {
    const homeComponent = cbHomeServer();
    return homeComponent.renderToString();
}

export async function handleHome(request: Request, response: Response) {
    const html = await serverAppToString(request.url);

    // const indexFile = path.resolve(process.cwd(), 'dist/index.html');
    const indexFile = path.resolve(process.cwd(), 'server.html');
    const indexText = fs.readFileSync(indexFile, 'utf-8');

    const responseText = indexText.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    response.send(responseText);

}
