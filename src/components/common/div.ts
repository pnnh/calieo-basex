import {html} from "@/components/style";
import {IComponent} from "@/components/common/component";

export class DivComponent implements IComponent {
    sendSync(): unknown {
        return null;
    }

    constructor(public children: IComponent[] = []) {
    }

    renderToString(): string {
        return html`
            <div>
                ${this.children.map(child => child.renderToString()).join('')}
            </div>
        `;
    }
}

export function div({children}: { children: IComponent[] }): IComponent {
    return new DivComponent(children);
}
