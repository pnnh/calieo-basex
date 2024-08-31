// export function CAComponent(str: string) {
//     console.log(`评估 @d(): ${str}`);
//     return (
//         value: any,
//     ) => {
//
//         customElements.define(`calieo-${str}`, value);
//         console.log(`应用 @d(): ${str}`);
//     }
// }

export function html(text: TemplateStringsArray, ...values: any[]) {
    let str = '';
    text.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}

export function css(text: TemplateStringsArray, ...values: any[]) {
    let str = '';
    text.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}