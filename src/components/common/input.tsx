import {html} from "@/components/component";
import JSX, {React} from '@/components/jsxFactory';

export interface CBInputCommonProps {
    multiline?: boolean
}

export interface CBComponent {
    toString: () => string
}

export class CBInputCommon implements CBComponent {
    #text: string = 'Click';
    #multiline: boolean = false;

    public static new(props: CBInputCommonProps) {
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

export function CBInputCommon2({text, multiline = true}: { text: string, multiline?: boolean }) {
    return <calieo-input>
        <style>{`
            .textarea, input {
            color: blue;
            border: none;
        }`}
        </style>
        {multiline ? <textarea>{text}</textarea> : <input type="text" value={text}/>}
    </calieo-input>


}