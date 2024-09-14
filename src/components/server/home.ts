import {html} from "../style";


export class CBHomeServer {

    renderToString() {
        return html`
            <div>From Server</div>
            <calieo-button>Server Button</calieo-button>
        `
    }
}
