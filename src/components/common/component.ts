import {IMailbox} from "@/components/common/mailbox";

export interface IComponent extends IMailbox {
    renderToString(): string
}
