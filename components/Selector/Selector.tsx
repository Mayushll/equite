import romb from "../../public/checkedPoint.svg"
import colorromb from "../../public/emptyPoint.svg"
import Image from 'next/image'
import {useState} from "react";
import { SelectorWrapper } from "./Selector.style";

export const Selector = () => {
    const [isChoosed, setIsChoosed] = useState([false, false, true])
    return (
        <SelectorWrapper>
            <Image
                src={isChoosed[0] ? romb : colorromb}
                onClick={()=>setIsChoosed([true, false, false])}
                width={50}
                height={50}
                layout={"fixed"}
            >
            </Image>
            <Image
                src={isChoosed[1] ? romb : colorromb}
                onClick={()=>setIsChoosed([false, true, false])}
                width={50}
                height={50}
                layout={"fixed"}
            >
            </Image>
            <Image
                src={isChoosed[2] ? romb : colorromb}
                onClick={()=>setIsChoosed([false, false, true])}
                width={50}
                height={50}
                layout={"fixed"}
            >
            </Image>
        </SelectorWrapper>
    );
};
