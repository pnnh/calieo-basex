export function CAComponent(targetClass: any) {
    console.log('CAComponent')
    customElements.define("calieo-button", targetClass);
}

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