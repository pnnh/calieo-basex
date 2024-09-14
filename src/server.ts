import type {Request, Response} from "express";
import * as fs from "node:fs";
import * as path from "node:path";
import express, {NextFunction} from "express";
import cors from 'cors'
import {CBHomeServer} from "./components/server/home";
import proxy from 'express-http-proxy'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send({errors: [{message: "Something went wrong"}]});
};

export function prepareServer() {
    const server = express();

    // 解决跨域问题
    server.use(cors({
        credentials: true,
        origin: true,
    }));

    server.use(errorHandler)
    server.get("/", handleHome);

    if (process.env.NODE_ENV === 'development') {
        server.use(proxy('http://localhost:5173'))
        // server.use('/src', express.static('src'))
    } else {
        server.use(express.static('dist'))
    }

    server.all("*", (req, res) => {
        res.json({code: 200});
    });
    return server
}

export default async function serverAppToString(url: string) {
    const homeComponent = new CBHomeServer();
    const htmlComponent = homeComponent.renderToString();

    return htmlComponent.toString();
}

export async function handleHome(request: Request, response: Response) {
    const html = await serverAppToString(request.url);

    // const indexFile = path.resolve(process.cwd(), 'dist/index.html');
    const indexFile = path.resolve(process.cwd(), 'index.html');
    const indexText = fs.readFileSync(indexFile, 'utf-8');

    const responseText = indexText.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    response.send(responseText);

}
