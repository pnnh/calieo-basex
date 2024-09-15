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
        let str = '';
        this.styles.forEach((style) => {
            Object.keys(style).forEach((key) => {
                str += `.${style[key].className} {${style[key].styleText}}\n`
            })
        })
        return str;
    }

    renderToTag() {
        const rawStyle = this.renderToString();
        const outputStyle = rawStyle.replace(/\n/g, '').replace(/\s+/g, ' ');
        return html`
            <style>${outputStyle}</style>`
    }
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
