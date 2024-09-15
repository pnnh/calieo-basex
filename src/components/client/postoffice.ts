export interface IMail {
    subject: string;
    content: string;
}

export interface IMailbox {
    readSync(mail: IMail): unknown;
}

const mailboxList: Map<string, IMailbox> = new Map();

export function registerComponent(name: string, component: IMailbox) {
    mailboxList.set(name, component);
}

export function getComponentValue<T>(name: string) {
    const mailbox = mailboxList.get(name);
    if (mailbox) {
        const mail: IMail = {
            subject: 'getValue',
            content: ''
        }
        return mailbox.readSync(mail) as T;
    }
}
