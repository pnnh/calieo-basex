import {IComponent} from "@/components/common/component";
import {css, html, renderStyleGroupToTag, renderStylesToTag, StyleGroup} from "../style";
import {encodeHtml} from "@pnnh/atom";

export interface ISpanProps {
    text: string;
    color?: string;
}

export class SpanComponent implements IComponent {
    sendSync(): unknown {
        return null;
    }

    constructor(private props: ISpanProps) {
    }

    renderToString(): string {
        const styleGroup = {
            inputContainer: css`
                background-color: #FFF;
                border-radius: 4px;
                color: ${this.props.color || '#000'};
            `,
        }
        return html`
            ${renderStyleGroupToTag(styleGroup)}
            <span class="${styleGroup.inputContainer.className}"> 
            ${encodeHtml(this.props.text)}
            </span>
        `;
    }
}

export function span(props: ISpanProps): IComponent {
    return new SpanComponent(props);
}
