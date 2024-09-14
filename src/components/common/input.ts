import {html} from "../style";


export function CBInput({
                            id,
                            text,
                            placeholder = '',
                            multiline = true
                        }: {
    id: string,
    text: string, placeholder?: string,
    multiline?: boolean
}) {
    return html`
        <calieo-input>
            <style>{
            textarea, input {
                color: blue;
                border: none;
            }

            }
            </style>
            {multiline ? <textarea placeholder={placeholder}>{text}</textarea> :
            <input type="text" value={text} placeholder={placeholder}/>}
        </calieo-input>
    `
}
