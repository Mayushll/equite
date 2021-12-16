import React from 'react';
import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import {StartButton} from "../../../Shared/StartButton/StartButton";
import {PurpleBorderedButton} from "../../../Shared/PurpleBorderedButton/PurpleBorderedButton";
import {ButtonsWrapper} from './RightButtons.style';
import {LanguageButton} from "../../../Shared/LanguageButton/LanguageButton";
import Languages from "../../../../store/Languages";
import {observer} from "mobx-react";


export const RightButtons:React.FC = observer(() => {
    return (
        <ButtonsWrapper>
            <LanguageButton/>
            <PurpleBorderedButton
                width={108}
                sx={{['@media (max-width:1130px)']: {display: 'none'},}}
            >
                {Languages.language === "ru" ? Languages.languages.buttons.login.ru : Languages.languages.buttons.login.eng}
            </PurpleBorderedButton>
            <StartButton
                width={108}
                sx={{['@media (max-width:1130px)']: {display: 'none'},}}
             />
        </ButtonsWrapper>
    );
});