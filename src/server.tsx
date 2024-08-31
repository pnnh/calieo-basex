// import * as React from "react";
// import {Route, Routes} from "react-router";
// import ReactDOMServer from "react-dom/server";
// import {StaticRouter} from "react-router-dom/server";
import {CBIndexServer} from "@/components/server/home";
import JSX, {React} from '@/components/jsxFactory';

// export class ServerIndex {
//     render() {
//         return <html lang="zh">
//         <head>
//             <meta charSet="UTF-8"/>
//             <title>Basex</title>
//             <style type={'text/css'}>
//                 {`
//                 html, body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//   padding: 0 !important;
//   margin: 0 !important;
//   font-size: 16px;
//   line-height: 1.5;
//   color: #333;
//   background-color: #f8f9fa;
//   overflow: hidden !important;
// }
//                 `}
//             </style>
//         </head>
//         <body>
//         <div id="root">root</div>
//         <div is="word-count"></div>
//         <script type={'module'} src={'/build/index.mjs'}></script>
//         <p>三生三世</p>
//         </body>
//         </html>
//     }
//
//     renderToString() {
//         return renderToString(this.render())
//     }
// }
// export function ServerIndex() {
//     return (
//         <html>
//         <head>
//             <title>Server Rendered App</title>
//             <style type={'text/css'}>
//                 {`
//                      html, body {
//                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//                        padding: 0 !important;
//                        margin: 0 !important;
//                        font-size: 16px;
//                        line-height: 1.5;
//                        color: #333;
//                        background-color: #f8f9fa;
//                        overflow: hidden !important;
//                      }
//                 `}
//             </style>
//         </head>
//         <body>
//         <Routes>
//             <Route path="/" element={<div>Home8</div>}/>
//             <Route path="/about" element={<div>About</div>}/>
//         </Routes>
//         <div is="word-count"></div>
//         <calieo-button/>
//         <script type={'module'} src={'/build/index.mjs'}></script>
//         </body>
//         </html>
//     );
// }
//
// export function ServerIndex2() {
//     return (
//         <html>
//         <head>
//             <title>Server Rendered App</title>
//             <style type={'text/css'}>
//                 {`
//                      html, body {
//                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//                        padding: 0 !important;
//                        margin: 0 !important;
//                        font-size: 16px;
//                        line-height: 1.5;
//                        color: #333;
//                        background-color: #f8f9fa;
//                        overflow: hidden !important;
//                      }
//                 `}
//             </style>
//         </head>
//         <body>
//         <Routes>
//             <Route path="/" element={<div>Home8</div>}/>
//             <Route path="/about" element={<div>About</div>}/>
//         </Routes>
//         <div is="word-count"></div>
//         <calieo-button/>
//         <script type={'module'} src={'/build/index.mjs'}></script>
//         </body>
//         </html>
//     );
// }

export default async function serverAppToString(url: string) {
    // let html: string = '<html><body></body></html>'

    const homeComponent = new CBIndexServer();
    const htmlComponent = await homeComponent.renderToString();

    return "<!DOCTYPE html>" + htmlComponent.toString();
}