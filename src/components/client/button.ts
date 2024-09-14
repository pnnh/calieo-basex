export class CBButtonElement extends HTMLElement {
    #shadowRoot: ShadowRoot;
    #text: string = 'click';

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    set setText(text: string) {
        this.#text = text;
    }

    connectedCallback() {
        const shadow2 = this.#shadowRoot;
        const text = shadow2.host.innerHTML
        console.log('text', text)
        const button = document.createElement('button') as HTMLButtonElement;
        button.textContent = shadow2.host.innerHTML || this.#text;
        button.onclick = () => {
            console.log('click', this.#text)
        }
        shadow2.appendChild(button)
    }
}

customElements.define(`calieo-button`, CBButtonElement);
