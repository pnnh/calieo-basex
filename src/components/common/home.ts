import {html, css, StyleGroup} from "../style";

const {styles, styleGroup} = StyleGroup.create({
    homeContainer: css`
        background-color: #FFF;
        border-radius: 4px;
    `,
})

export function renderCBHome() {
    return html`
        <div class="${styles.homeContainer.className}">
            ${styleGroup.renderToTag()}
            <div>From Client</div>
            <calieo-input name="xxx" value="哈哈"></calieo-input>
            <calieo-button name="yyy">Client Button</calieo-button>
            <div>
                <calieo-text name="zzz">
                    TextView
                </calieo-text>
            </div>
        </div>
    `
}
