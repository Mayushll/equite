import {StartButton} from "../../Shared/StartButton/StartButton";
import {PurpleBorderedButton} from "../../Shared/PurpleBorderedButton/PurpleBorderedButton";
import React from "react";
import {ButtonsWrapper} from "./Buttons.style";

export const Buttons:React.FC = () => {
    return (
        <ButtonsWrapper>
            <StartButton
                width={190}
                sx={{}}
            />
            <PurpleBorderedButton
                width={190}
                sx={{
                    ['@media (max-width:850px)']: {
                        width: "140px",
                        marginRight: "0"
                    },
                    ['@media (max-width:400px) and (max-height: 900px)']: {
                        width: "120px",
                    },
                }}
            >
                Я трейдер
            </PurpleBorderedButton>
        </ButtonsWrapper>
    );
};