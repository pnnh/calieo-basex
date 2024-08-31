import {html} from "@/components/component";
import {CButtonServer,} from "@/components/server/button";
import {CBInputServer} from "@/components/server/input";

export class CBIndexServer {
    async renderToString() {
        const buttonHtml = html`
            <html>
            <head>
                <title>Server Rendered App</title>
                <style>
                    html, body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                        padding: 0 !important;
                        margin: 0 !important;
                        font-size: 16px;
                        line-height: 1.5;
                        color: #333;
                        background-color: #f8f9fa;
                        overflow: hidden !important;
                    }
                </style>
            </head>
            <body>
            ${CButtonServer.new().setText('点击一下')}

            <div>
                ${CBInputServer.new({multiline: true})}
                交换
                ${CBInputServer.new({multiline: false})}
            </div>

            <script type='module' src='/build/index.mjs'></script>
            </body>
            </html>`;
        return buttonHtml
    }
}

