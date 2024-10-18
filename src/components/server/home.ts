import {div} from "@/components/common/div";
import {span} from "@/components/common/span";
import {caButton} from "@/components/common/button";
import {IComponent} from "@/components/common/component";
import {IMail} from "@/components/common/mailbox";

export class CBHomeServer implements IComponent {

    renderToString() {
        return div({
            children: [
                span({text: 'From Server', color: '#dd0b0b'}),
                caButton({children: []}),
                div({children: []}),
            ]
        }).renderToString()
    }

    sendSync(mail: IMail): unknown {
        return undefined;
    }
}

export function cbHomeServer(): CBHomeServer {
    return new CBHomeServer();
}
