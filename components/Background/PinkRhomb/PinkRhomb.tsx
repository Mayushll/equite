import React from 'react';
import Image from "next/image";
import square2 from "../../../public/square2.png";
import { StyledPinkRhomb } from './PinkRhomb.style';

export const PinkRhomb = () => {
    return (
        <StyledPinkRhomb>
            <Image
                src={square2}
                layout={"responsive"}
                width={330}
                height={330}
                alt="image"
            />
        </StyledPinkRhomb>

    );
};