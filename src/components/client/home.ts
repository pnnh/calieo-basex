import {CBButtonElement} from "./button";


export class CBHomeElement extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;

        const button = new CBButtonElement();
        button.setText = 'Click Hello';
        shadow2.appendChild(button);
    }
}

customElements.define(`calieo-home`, CBHomeElement);
