import {CBInputCommon, CBInputCommon2, CBInputCommonProps} from "@/components/common/input";
import JSX, {React} from '@/components/jsxFactory';

export class CBInputServer extends CBInputCommon {
    static new(props: CBInputCommonProps) {
        return CBInputCommon.new(props)
    }
}

export function CBInputServer2() {
    return <CBInputCommon2 text={'aaa'} multiline={false}/>
}