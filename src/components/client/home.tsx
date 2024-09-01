import {CBInputElement} from "@/components/client/input";

export class CBHomeElement extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;

    }
}

customElements.define(`calieo-home`, CBHomeElement);
