import binance from "../../public/binance.png"
import bitmex from "../../public/bitmex.png"
import bubit from "../../public/bubit.png"
import okex from "../../public/okex.png"
import ftx from "../../public/ftx.png"
import hitbtc from "../../public/hitbtc.png"
import Image from 'next/image'
import React from "react"
import { Brand, BrandsWrapper } from "./Brans.style"
import {BrandsBackground} from "./BrandsBackground/BrandsBackground";

export const Brands:React.FC = () => {
    return (
        <BrandsWrapper>
                <Brand>
                    <Image
                        src={binance}
                        layout={"responsive"}
                        width={197}
                        height={79}
                    />
                </Brand>
            <Brand>
                <Image
                    src={bubit}
                    layout={"responsive"}
                    width={141}
                    height={52}
                />
            </Brand>
            <Brand>
                <Image
                    src={okex}
                    layout={"responsive"}
                    width={174}
                    height={47}
                />
            </Brand>
            <Brand>
                <Image
                    src={ftx}
                    layout={"responsive"}
                    width={138}
                    height={49}
                />
            </Brand>
            <Brand>
                <Image
                    src={bitmex}
                        layout={"responsive"}
                    width={163}
                    height={27}
                />
            </Brand>
            <Brand>
                <Image
                    src={hitbtc}
                        layout={"responsive"}
                    width={141}
                    height={60}
                />
            </Brand>
            <BrandsBackground/>
        </BrandsWrapper>
    );
};