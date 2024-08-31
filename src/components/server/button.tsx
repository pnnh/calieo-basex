import {CButtonCommon,} from "@/components/common/button";

// export function renderCButtonServer() {
//     return renderCButtonCommon()
// }


export class CButtonServer extends CButtonCommon {
    static new() {
        return new CButtonServer()
    }
}