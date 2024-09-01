import JSX, {React} from '@/components/jsxFactory';
import {CBButtonServer} from './button';
import {CBHomeCommon} from "@/components/common/home";

export class CBHomeServer implements CBHomeCommon {

    renderToString() {
        return <html>
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
        {/*<CBInput id={'inputText'} text={'输入内容'}/>*/}
        <CBButtonServer id={'btnEncode'} text={'编码'}/>
        {/*<CBInput id={'inputResult'} text={'结果'} multiline={true}/>*/}

        <script type='module' src='/build/index.mjs'></script>
        </body>
        </html>
    }
}
