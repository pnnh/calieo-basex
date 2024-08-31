import {css, html} from "@/components/component";
import JSX, {React} from '@/components/jsxFactory';

export function CButtonCommon2({text}: { text: string }) {
    return <calieo-button>
        <style>
            {css`

                .blue-button {
                    color: white;
                    background-color: blue;
                }
            `}
        </style>
        <button id="blueButton" class="blue-button">{text}</button>
    </calieo-button>
}

export class CBButton extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;
        while (this.children.length > 0) {
            const child = this.children[0]
            shadow2.appendChild(child.cloneNode(true))
            child.remove()
        }

        const blueButton = shadow2.getElementById('blueButton')

        if (blueButton) {
            blueButton.onclick = () => {
                console.log('click')
            }
        }

    }
}

customElements.define(`calieo-button`, CBButton);
