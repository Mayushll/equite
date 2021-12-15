import React from 'react';
import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import {StartButton} from "../../../Shared/StartButton/StartButton";
import {PurpleBorderedButton} from "../../../Shared/PurpleBorderedButton/PurpleBorderedButton";
import {ButtonsWrapper} from './RightButtons.style';


export const RightButtons:React.FC = () => {
    return (
        <ButtonsWrapper>
            <Button
                variant="contained"
                sx={{
                    borderColor: "#EEE4FF",
                    width: "42px",
                    height: "40px",
                    marginRight: "20px",
                    color: "#AE8DE5",
                    padding: 0,
                    lineHeight: 0
                }}
            >
                Ru
            </Button>
            <PurpleBorderedButton
                width={108}
                sx={{['@media (max-width:1350px)']: {display: 'none'},}}
            >
                Войти
            </PurpleBorderedButton>
            <StartButton
                width={108}
                sx={{['@media (max-width:1350px)']: {display: 'none'},}}
             />
        </ButtonsWrapper>
    );
};