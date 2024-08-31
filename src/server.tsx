import {CBIndexServer2} from "@/components/server/home";
import JSX, {React} from '@/components/jsxFactory';

export default async function serverAppToString(url: string) {
    // let html: string = '<html><body></body></html>'

    // const homeComponent = new CBIndexServer();
    // const htmlComponent = await homeComponent.renderToString();
    //
    // return "<!DOCTYPE html>" + htmlComponent.toString();
    const homeComponent = <CBIndexServer2/>
    return "<!DOCTYPE html>" + homeComponent.toString();
}