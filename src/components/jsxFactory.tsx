// export default function jsxFactory(tag: JSX.Tag | JSX.Component,
//                                    attributes: { [key: string]: any } | null,
//                                    ...children: Node[]) {
//
//     if (typeof tag === 'function') {
//         return tag(attributes ?? {}, children);
//     }
//     type Tag = typeof tag;
//     const element = document.createElement(tag);
//
//     // Assign attributes:
//     let map = (attributes ?? {});
//     let prop: keyof typeof map;
//     for (prop of (Object.keys(map) as any)) {
//
//         // Extract values:
//         prop = prop.toString();
//         const value = map[prop] as any;
//         const anyReference = element as any;
//         if (typeof anyReference[prop] === 'undefined') {
//             // As a fallback, attempt to set an attribute:
//             element.setAttribute(prop, value);
//         } else {
//             anyReference[prop] = value;
//         }
//     }
//
//     // append children
//     for (let child of children) {
//         if (typeof child === 'string') {
//             element.innerText += child;
//             continue;
//         }
//         if (Array.isArray(child)) {
//             element.append(...child);
//             continue;
//         }
//         element.appendChild(child);
//     }
//     return element;
//
// }


import {CBInputServer} from "@/components/server/input";
import {CBComponent} from "@/components/common/input";

interface CBComponentFactory {
    constructor(props: any): CBComponent

    //instance(props: any): CBComponent
}

type CBComponentFactory2 = (props: any) => CBComponent

// type ConstructorParametersType = ConstructorParameters<typeof CBComponent>;
//
// function createRectangle(props: { [id: string]: string; }, ...params: ConstructorParametersType):
//     CBComponent {
//     return new CBComponent(...params);
// }

export const JSX = {
    createElement(name: string | CBComponentFactory2, props: { [id: string]: string }, ...content: string[]) {
        props = props || {};
        const typeName = (typeof name);
        if (typeName === "function") {
            const factory = (name as CBComponentFactory2);
            const instance = factory(props);
            // const instance = createRectangle(props)
            console.log('instance', instance);
            return instance.toString();
        }
        console.log('createElement', name, typeName);
        const propsstr = Object.keys(props)
            .map(key => {
                const value = props[key];
                if (key === "className") return `class=${value}`;
                else return `${key}=${value}`;
            })
            .join(" ");
        return `<${name} ${propsstr}> ${content.join("")}</${name}>`;
    },
};

export const React = JSX

export default JSX;