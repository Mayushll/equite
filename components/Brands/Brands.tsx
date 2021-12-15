import binance from "../../public/binance.png"
import bitmex from "../../public/bitmex.png"
import bubit from "../../public/bubit.png"
import okex from "../../public/okex.png"
import ftx from "../../public/ftx.png"
import hitbtc from "../../public/hitbtc.png"
import Image from 'next/image'
import {styled} from "@mui/material";
import {BrandsBackground} from "./BrandsBackground/BrandsBackground";

const Brand = styled(`div`)({
    paddingRight: "3vw",
    ['@media (max-width:830px)']: {
        [":nth-child(3n)"]: {
            paddingRight: "0vw",
        }
    },

})
const BrandsWrapper = styled(`div`)({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(6, 235px);",
    zIndex: "1",
    alignItems: "center",
    ['@media (max-width:1400px)']: {
        padding: "0 2vw"
    },
    ['@media (max-width:1450px)']: {
        gridTemplateColumns: "repeat(6, 16vw);",
    },
    ['@media (max-width:700px)']: {
        gridTemplateColumns: "32vw 32vw 32vw;",
    },


})

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