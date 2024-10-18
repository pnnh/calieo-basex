import {stringToMd5} from "@pnnh/atom";


export class StyleObject {
    #styleName: string = '';
    #styleText: string

    constructor(text: string) {
        this.#styleText = text;
    }

    set setClassName(name: string) {
        this.#styleName = name;
    }

    get className() {
        return this.#styleName;
    }

    get styleText() {
        return this.#styleText;
    }
}

export class StyleGroup {
    styles: { [key: string]: StyleObject }[] = [];

    static create(styles: { [key: string]: StyleObject }) {
        const styleGroup = new StyleGroup();
        styleGroup.styles.push(styles);
        for (const key in styles) {
            const styleText = styles[key].styleText;
            const suffix = stringToMd5(styleText).slice(0, 8);
            styles[key].setClassName = `pls-${key}-${suffix}`;
        }
        return {styles, styleGroup}
    }

    renderToString() {
        let styles: StyleObject[] = [];
        this.styles.forEach((style) => {
            styles = styles.concat(Object.values(style));
        });
        return renderStylesToString(styles);
    }

    renderToTag() {
        let styles: StyleObject[] = [];
        this.styles.forEach((style) => {
            styles = styles.concat(Object.values(style));
        });
        return renderStylesToTag(...styles);
    }
}


export function renderStylesToString(styles: StyleObject[] = []) {
    let str = '';
    styles.forEach((style) => {
        str += `.${style.className} {${style.styleText}}\n`
    })
    return str;
}

export function renderStyleGroupToTag(styles: { [key: string]: StyleObject }) {
    for (const key in styles) {
        const styleText = styles[key].styleText;
        const suffix = stringToMd5(styleText).slice(0, 8);
        styles[key].setClassName = `ca-${key}-${suffix}`;
    }
    return renderStylesToTag(...Object.values(styles));
}

export function renderStylesToTag(...styles: StyleObject[]) {
    const rawStyle = renderStylesToString(styles);
    const outputStyle = rawStyle.replace(/\n/g, '');
    return html`
        <style>${outputStyle}</style>`
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
    return new StyleObject(str);
}
