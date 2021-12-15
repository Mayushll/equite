import group from "../../../public/Group.png"
import Image from 'next/image'
import React from "react";
import { BottomImage } from "./Brands.style";

export const BrandsBackground:React.FC = () => {
    return (
        <BottomImage>
            <Image
                src={group}
                layout={"fill"}
                objectFit={"cover"}
                quality={100}
            >
            </Image>
        </BottomImage>
    );
};