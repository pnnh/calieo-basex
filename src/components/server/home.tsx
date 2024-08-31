import {CBInputServer2} from "@/components/server/input";
import JSX, {React} from '@/components/jsxFactory';
import {CButtonCommon2} from "@/components/common/button";

export function CBIndexServer2() {
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
    <CBInputServer2 text={'点击一下2'}/>
    <CButtonCommon2 text={'按钮'}/>

    <script type='module' src='/build/index.mjs'></script>
    </body>
    </html>
}