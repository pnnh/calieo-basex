import {getComponentValue, IMail, IMailbox, registerComponent, setComponentValue} from "@/components/client/postoffice";

export class CBButtonElement extends HTMLElement implements IMailbox {
    #shadowRoot: ShadowRoot;
    #text: string = 'click';

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
        const name = this.getAttribute('name');
        if (name) {
            registerComponent(name, this);
        }
    }

    sendSync(mail: IMail): unknown {
        throw new Error("Method not implemented.");
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
            const inputValue = getComponentValue<string>('xxx')
            console.log('inputValue', inputValue)
            setComponentValue('zzz', inputValue)
        }
        shadow2.appendChild(button)
    }
}

customElements.define(`calieo-button`, CBButtonElement);
