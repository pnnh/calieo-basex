import {renderCBHome} from "@/components/common/home";

export class CBHomeElement extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;

        shadow2.innerHTML = renderCBHome()
    }
}

customElements.define(`calieo-home`, CBHomeElement);
