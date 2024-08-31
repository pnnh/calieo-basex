import JSX, {React} from '@/components/jsxFactory';

export interface CBInputCommonProps {
    multiline?: boolean
}

export interface CBComponent {
    toString: () => string
}


export function CBInputCommon2({text, multiline = true}: { text: string, multiline?: boolean }) {
    return <calieo-input>
        <style>{`
            textarea, input {
            color: blue;
            border: none;
        }`}
        </style>
        {multiline ? <textarea>{text}</textarea> : <input type="text" value={text}/>}
    </calieo-input>


}

export class CBInput2 extends HTMLElement {
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

customElements.define(`calieo-input`, CBInput2);
