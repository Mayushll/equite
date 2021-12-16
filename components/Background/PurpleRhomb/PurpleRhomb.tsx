import React from 'react';
import Image from "next/image";
import square1 from "../../../public/square1.png";
import { StyledPurpleRhomb } from './PurpleRhomb.style';

export const PurpleRhomb = () => {
    return (
        <StyledPurpleRhomb>
            <Image
                src={square1}
                layout={"responsive"}
                width={330}
                height={330}
                alt="image"
            />
        </StyledPurpleRhomb>
    );
};