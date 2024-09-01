import {CBButtonCommon} from "@/components/common/button";
import {css} from "@/components/component";
import JSX, {React} from "@/components/jsxFactory";

export class CBButtonServer extends CBButtonCommon {
    private id: string;
    private text: string;

    constructor(props: { id: string, text: string }) {
        super();
        this.id = props.id;
        this.text = props.text;
    }

    renderToString() {
        return <calieo-button>
            <style>
                {css`
                    .blue-button {
                        color: white;
                        background-color: blue;
                    }
                `}
            </style>
            <button id="blueButton" class="blue-button">{this.text}</button>
        </calieo-button>
    }
}