import {html} from "@/components/component";
import {CButtonServer,} from "@/components/server/button";
import {CBInputServer, CBInputServer2} from "@/components/server/input";
import JSX, {React} from '@/components/jsxFactory';

export class CBIndexServer {
    async renderToString() {
        const abc = <html>
        <head>
            <title>Server Rendered App</title>
            <style>{`
                html, body {
                font - family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                padding: 0 !important;
                margin: 0 !important;
                font-size: 16px;
                line-height: 1.5;
                color: #333;
                background-color: #f8f9fa;
                overflow: hidden !important;
            }`}
            </style>
        </head>
        <body>
        <CBInputServer2 text={'点击一下2'}/>

        <script type='module' src='/build/index.mjs'></script>
        </body>
        </html>
        return abc
        // const buttonHtml = html`
        //     <html>
        //     <head>
        //         <title>Server Rendered App</title>
        //         <style>
        //             html, body {
        //                 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        //                 padding: 0 !important;
        //                 margin: 0 !important;
        //                 font-size: 16px;
        //                 line-height: 1.5;
        //                 color: #333;
        //                 background-color: #f8f9fa;
        //                 overflow: hidden !important;
        //             }
        //         </style>
        //     </head>
        //     <body>
        //     ${CButtonServer.new().setText('点击一下')}
        //
        //     <div>
        //         ${CBInputServer.new({multiline: true})}
        //         交换
        //         ${CBInputServer.new({multiline: false})}
        //     </div>
        //     ${abc}
        //     <script type='module' src='/build/index.mjs'></script>
        //     </body>
        //     </html>`;
        // return buttonHtml
    }
}

