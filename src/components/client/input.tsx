import {CAComponent} from "@/components/component";

@CAComponent('input')
export class CBInput extends HTMLElement {
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