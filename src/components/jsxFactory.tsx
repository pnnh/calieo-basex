import {CBComponent} from "@/components/common/input";

type CBComponentFactory2 = (props: any) => CBComponent

export const JSX = {
    createElement(name: string | CBComponentFactory2, props: { [id: string]: string }, ...content: string[]) {
        props = props || {};
        const typeName = (typeof name);
        if (typeName === "function") {
            const factory = (name as CBComponentFactory2);
            const instance = factory(props);
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