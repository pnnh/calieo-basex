import * as React from "react";
import {createRoot} from "react-dom/client";
import {html, render} from "lit-html";

class CBButton extends HTMLElement {
    #shadowRoot: ShadowRoot;

    constructor() {
        super();
        // Create a shadow root
        this.#shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        const shadow = this.#shadowRoot;

        const buttonHtml = html`
            <button>Click me</button>`;
        const buttonElement = document.createElement("div");
        render(buttonHtml, buttonElement);

        // Attach the created elements to the shadow dom
        shadow.appendChild(buttonElement);

        const rootElement = document.createElement("div");
        rootElement.className = "rootElement";
        if (!rootElement) {
            throw new Error("Root element not found");
        }
        shadow.appendChild(rootElement);

        createRoot(rootElement).render(
            <div>Button按钮</div>
        );
    }
}

customElements.define("calieo-button", CBButton);
