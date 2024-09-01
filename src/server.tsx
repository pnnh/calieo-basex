import {CBHomeServer} from "@/components/server/home";
import JSX, {React} from '@/components/jsxFactory';

export default async function serverAppToString(url: string) {
    // let html: string = '<html><body></body></html>'

    // const homeComponent = new CBIndexServer();
    // const htmlComponent = await homeComponent.renderToString();
    //
    // return "<!DOCTYPE html>" + htmlComponent.toString();
    const homeComponent = <CBHomeServer/>
    return "<!DOCTYPE html>" + homeComponent.toString();
}