import {getComponentValue, registerComponent} from "@/components/client/postoffice";
import {IMail, IMailbox} from "@/components/common/mailbox";

export class CBTextElement extends HTMLElement implements IMailbox {
    #shadowRoot: ShadowRoot;
    #text: string = '';

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
        const name = this.getAttribute('name');
        if (name) {
            registerComponent(name, this);
        }
    }

    sendSync(mail: IMail): unknown {
        if (mail.subject === 'setValue') {
            this.setText = mail.content;
            return
        }
        throw new Error("Method not implemented.");
    }

    set setText(text: string) {
        this.#text = text;

        const spanElement = this.#shadowRoot.querySelector('span') as HTMLSpanElement;
        if (spanElement) {
            spanElement.innerText = text;
        }
    }

    connectedCallback() {
        const shadow = this.#shadowRoot;
        const text = shadow.host.innerHTML
        if (shadow.host.children.length === 0) {
            const span = document.createElement('span') as HTMLSpanElement;
            span.innerText = text.trim() || this.#text;
            shadow.appendChild(span)
            shadow.host.innerHTML = ''
        } else {
            for (let i = 0; i < shadow.host.children.length; i++) {
                console.log('shadow.host.children[i]', shadow.host.children[i])
                const child = shadow.host.children[i]
                shadow.appendChild(child)
            }
        }
    }
}

customElements.define(`calieo-text`, CBTextElement);
