import {html} from "@/components/component";


export class CButtonCommon {
    #text: string = 'Click';

    static new() {
        return new CButtonCommon()
    }

    public setText(text: string): CButtonCommon {
        this.#text = text
        return this;
    }

    public toString = (): string => {
        const buttonHtml = html`
            <calieo-button>
                <style>
                    .blue-button {
                        color: white;
                        background-color: blue;
                    }
                </style>
                <button id="blueButton" class="blue-button">${this.#text}</button>
            </calieo-button>`
        return buttonHtml
    }
}