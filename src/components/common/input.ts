import {html, css, StyleGroup} from "../style";
import {encodeHtml} from "@/services/common/html";

export interface IInputProps {
    text: string;
    id?: string;
    placeholder?: string;
    multiline?: boolean;
}

const {styles, styleGroup} = StyleGroup.create({
    inputContainer: css`
        background-color: #FFF;
        border-radius: 4px;
    `,
})

export function renderInput(props: IInputProps = {id: '', text: 'input', placeholder: '', multiline: false}) {
    const encodedText = encodeHtml(props.text)
    const encodedPlaceholder = encodeHtml(props.placeholder)
    if (props.multiline) {
        return html`
            ${styleGroup.renderToTag()}
            <textarea placeholder="${encodedPlaceholder}">"${encodedText}"</textarea>
        `
    }
    return html`
        ${styleGroup.renderToTag()}
        <input class="${styles.inputContainer.className}" type="text" value="${encodedText}"
               placeholder="${encodedPlaceholder}"/>
    `
}
