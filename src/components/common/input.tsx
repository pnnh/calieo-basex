import JSX, {React} from '@/components/jsxFactory';

export interface CBInputCommonProps {
    multiline?: boolean
}

export interface CBComponent {
    toString: () => string
}


export function CBInputCommon2({text, multiline = true}: { text: string, multiline?: boolean }) {
    return <calieo-input>
        <style>{`
            .textarea, input {
            color: blue;
            border: none;
        }`}
        </style>
        {multiline ? <textarea>{text}</textarea> : <input type="text" value={text}/>}
    </calieo-input>


}