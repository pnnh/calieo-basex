import JSX, {React} from '@/components/jsxFactory';
import {css} from "@/components/component";

export interface CBInputProxy {
    getText(): string

    setText(text: string): void
}

export interface CBComponent {
    toString: () => string
}

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
    return <calieo-input>
        <style>{css`
            textarea, input {
                color: blue;
                border: none;
            }`}
        </style>
        {multiline ? <textarea placeholder={placeholder}>{text}</textarea> :
            <input type="text" value={text} placeholder={placeholder}/>}
    </calieo-input>
}
