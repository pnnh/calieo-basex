import {html} from "@/components/component";

export interface CBInputCommonProps {
    multiline?: boolean
}

export class CBInputCommon {
    #text: string = 'Click';
    #multiline: boolean = false;

    static new(props: CBInputCommonProps) {
        const instance = new CBInputCommon()
        instance.#multiline = props.multiline ?? false
        return instance
    }

    public setText(text: string): CBInputCommon {
        this.#text = text
        return this;
    }

    #renderSingleLine = () => {
        return html`<input type="text" value="${this.#text}">`
    }

    #renderMultiline = () => {
        return html`
            <textarea>${this.#text}</textarea>
        `
    }

    public toString = (): string => {
        return html`
            <calieo-input>
                <style>
                    .textarea, input {
                        color: blue;
                        border: none;
                    }
                </style>
                ${this.#multiline ? this.#renderMultiline() : this.#renderSingleLine()}
            </calieo-input>`
    }
}