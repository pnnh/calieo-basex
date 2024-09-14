import http from "http";
import {serverConfig} from "./src/services/server/config";
import {prepareServer} from "./src/server";

const workerPort = serverConfig.PORT;

const appServer = prepareServer();

const httpServer = http.createServer(appServer);

httpServer.listen(workerPort, async () => {
    console.log(
        `Worker server is running on http://localhost:${workerPort}`,
    );
});
