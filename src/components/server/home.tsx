import {html} from "@/components/component";
import {renderCButtonCommon} from "@/components/common/button";

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
            <!--            <Routes>-->
            <!--                <Route path="/" element={<div>Home8</div>}/>-->
            <!--                    <Route path="/about" element={<div>About</div>}/>-->
            <!--            </Routes>-->
            <!--            <div is="word-count"></div>-->
            ${renderCButtonCommon()}
            <script type='module' src='/build/index.mjs'></script>
            </body>
            </html>`;
        // const myServerTemplate = (name: string) => html`<p>Hello ${name}</p>`;
        // const renderResult = render(myServerTemplate('world'));
        // // const reader=new RenderResultReadable(renderResult);
        // const contents = await collectResult(renderResult);
        // return contents
        return buttonHtml
    }
}

