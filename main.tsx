import express, {NextFunction} from "express";
import http from "http";
import {serverConfig} from "@/services/server/config";
import cors from 'cors'
import {Request, Response} from "express";
import {HomeComponent} from "@/server";

const workerPort = serverConfig.PORT;

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send({errors: [{message: "Something went wrong"}]});
};

function runMain() {
    const server = express();

    // 解决跨域问题
    server.use(cors({
        credentials: true,
        origin: true,
    }));

    server.use(errorHandler)

    server.get('/', (req, res) => {
        const component = new HomeComponent()
        const respText = component.renderToString()
        res.send(respText)
    })
    server.use('/build', express.static('build'))

    server.all("*", (req, res) => {
        res.json({code: 200});
    });

    const httpServer = http.createServer(server);

    httpServer.listen(workerPort, async () => {
        console.log(
            `Worker server is running on http://localhost:${workerPort}`,
        );
    });
}

runMain();