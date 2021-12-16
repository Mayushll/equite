import React from 'react';
import Button from "@mui/material/Button";
import Languages from "../../../store/Languages";
import {observer} from "mobx-react-lite";

export const LanguageButton = observer( () => {
    function changeLanguage() {
        Languages.setLanguage(Languages.language)
    }
    return (
        <Button
            onClick={changeLanguage}
            variant="contained"
            sx={{
                borderColor: "#EEE4FF",
                width: "42px",
                height: "40px",
                marginRight: "20px",
                color: "#AE8DE5",
                padding: 0,
                lineHeight: 0,
                minWidth: 0
            }}
        >
            {Languages.language === "ru" ? Languages.languages.buttons.language.ru : Languages.languages.buttons.language.eng}
        </Button>
    );
});