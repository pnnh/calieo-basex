import {html, css, StyleGroup} from "../style";
import {encodeHtml} from "@/services/common/html";

export interface ITextProps {
    text: string;
    id?: string;
}

const {styles, styleGroup} = StyleGroup.create({
    textContainer: css`
        background-color: #FFF;
        border-radius: 4px;
    `,
})

export function renderCBText(props: ITextProps = {id: '', text: 'input'}) {
    const encodedText = encodeHtml(props.text)
    return html`
        ${styleGroup.renderToTag()}
        <span class="${styles.textContainer.className}">${encodedText}</span>
    `
}
