import * as React from "react";
import {renderToString} from "react-dom/server";

export class HomeComponent {
    render() {
        return <html lang="zh">
        <head>
            <meta charSet="UTF-8"/>
            <title>Basex</title>
            <style type={'text/css'}>
                {`
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
                `}
            </style>
        </head>
        <body>
        <div id="root">root</div>
        <div is="word-count"></div>
        <script type={'module'} src={'/build/index.mjs'}></script>
        <p>三生三世</p>
        </body>
        </html>
    }

    renderToString() {
        return renderToString(this.render())
    }
}
