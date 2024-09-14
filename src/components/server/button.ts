import {html} from "../style";

export class CBButtonServer {
    private id: string;
    private text: string;

    constructor(props: { id: string, text: string }) {
        this.id = props.id;
        this.text = props.text;
    }

    renderToString() {
        return html`
            <calieo-button>
                <style>
                    {
                    .blue-button {
                        color: white;
                        background-color: blue;
                    }

                    }
                </style>
                <button id="blueButton" class="blue-button">{this.text}</button>
            </calieo-button>`
    }
}
