import {css, html} from "@/components/component";
import JSX, {React} from '@/components/jsxFactory';

export function CButtonCommon2({text}: { text: string }) {
    return <calieo-button>
        <style>
            {css`

                .blue-button {
                    color: white;
                    background-color: blue;
                }
            `}
        </style>
        <button id="blueButton" class="blue-button">{text}</button>
    </calieo-button>
}
