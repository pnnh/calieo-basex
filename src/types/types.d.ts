import {IAppConfig} from "@/services/common/config";

export {} // 该行不能去掉，否则会提示类型不存在

declare global {
    interface Window {
        serverAPI: {
            getAppConfig: () => Promise<IAppConfig>
        }
    }

    /// <reference lib="DOM" />
    namespace JSX {
        // The return type of our JSX Factory: this could be anything
        type Element = HTMLElement;
        type Tag = string

        // IntrinsicElementMap grabs all the standard HTML tags in the TS DOM lib.
        interface IntrinsicElements extends IntrinsicElementMap {
            'calieo-button': CalieoButtonAttributes;
            'calieo-input': {};
        }


        // The following are custom types, not part of TS's known JSX namespace:
        type IntrinsicElementMap = {
            [K in keyof HTMLElementTagNameMap]: {
                [k: string]: any
            }
        }

        interface Component {
            (properties?: { [key: string]: any }, children?: Node[]): Node
        }

    }
}

interface CalieoButtonAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
    placement?: string;
}

// /// <reference lib="DOM" />
// declare module JSX {
//     type Element = string;
//
//     interface IntrinsicElements {
//         [elemName: string]: any;
//     }
// }