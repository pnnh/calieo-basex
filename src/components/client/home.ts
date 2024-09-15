import {html} from "@/components/style";

export class CBHomeElement extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;

        const htmlText = html`
            <div>From Client</div>
            <calieo-input name="xxx" value="哈哈"></calieo-input>
            <calieo-button name="yyy">Client Button</calieo-button>
        `
        shadow2.innerHTML = htmlText
    }
}

customElements.define(`calieo-home`, CBHomeElement);
