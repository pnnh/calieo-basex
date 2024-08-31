import * as React from "react";
import {createRoot} from "react-dom/client";
import {html, render} from "lit-html";

export function CAComponent(targetClass: any) {
    console.log('CAComponent')
    customElements.define("calieo-button", targetClass);
}

@CAComponent
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
            <style>
                .blue-button {
                    color: white;
                    background-color: blue;
                }
            </style>
            <button class="blue-button">Click me</button>`;
        render(buttonHtml, shadow);

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

//customElements.define("calieo-button", CBButton);
