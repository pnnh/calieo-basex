import {IComponent} from "@/components/common/component";
import {html} from "@/components/style";

export class CAButtonComponent implements IComponent {
    sendSync(): unknown {
        return null;
    }

    renderToString(): string {
        return html`
            <calieo-button></calieo-button>`;
    }
}

export function caButton({children}: { children: IComponent[] }): IComponent {
    return new CAButtonComponent();
}
