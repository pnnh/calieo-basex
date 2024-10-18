import {getComponentValue, registerComponent, setComponentValue} from "@/components/client/postoffice";
import {encodeBase64String} from "@pnnh/atom";
import {IMail, IMailbox} from "@/components/common/mailbox";

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
            if (inputValue) {
                const base64Encoded = encodeBase64String(inputValue)
                setComponentValue('zzz', base64Encoded)
            }
        }
        shadow2.appendChild(button)
    }
}

customElements.define(`calieo-button`, CBButtonElement);
