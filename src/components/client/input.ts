import {html} from "@/components/style";
import {IMail, IMailbox, registerComponent} from "@/components/client/postoffice";
import {renderInput} from "@/components/common/input";

export class CBInputElement extends HTMLElement implements IMailbox {
    #shadowRoot: ShadowRoot;
    #inputValue: string = '';

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: "closed"});
        const name = this.getAttribute('name');
        if (name) {
            registerComponent(name, this);
        }
    }

    readSync(mail: IMail): unknown {
        if (mail.subject === 'getValue') {
            return this.#inputValue;
        }
        throw new Error("Method not implemented.");
    }

    connectedCallback() {
        const shadow = this.#shadowRoot;
        shadow.innerHTML = renderInput()
        const inputElement = shadow.querySelector('input') as HTMLInputElement;
        this.#inputValue = this.getAttribute('value') || '';
        inputElement.value = this.#inputValue
        inputElement.addEventListener('change', (e) => {
            const selfElement = e.target as HTMLInputElement;
            this.#inputValue = selfElement.value;
        })
    }
}

customElements.define(`calieo-input`, CBInputElement);
