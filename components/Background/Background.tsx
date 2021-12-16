import Image from 'next/image'
import background from "../../public/backgroundman.png"
import {Back} from './Background.style';
import {Point} from './Background.style';
import React from "react";
import {PurpleRhomb} from "./PurpleRhomb/PurpleRhomb";
import {PinkRhomb} from "./PinkRhomb/PinkRhomb";


export const Background:React.FC = () => {
    return (
        <>
            <Back>
                    <Image
                        src={background}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                <Point> </Point>
            </Back>
            <PurpleRhomb/>
            <PinkRhomb/>
        </>
    );
};