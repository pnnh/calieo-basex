import {html} from "@/components/component";


export function renderCButtonCommon() {
    const buttonHtml = html`
        <calieo-button>
            <style>
                .blue-button {
                    color: white;
                    background-color: blue;
                }
            </style>
            <button id="blueButton" class="blue-button">Click me</button>
        </calieo-button>`
    return buttonHtml
}
