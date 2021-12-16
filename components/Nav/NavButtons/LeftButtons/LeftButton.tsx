import React from 'react';
import Button from "@mui/material/Button";
import Languages from "../../../../store/Languages";
import {observer} from "mobx-react";

export const LeftButton:React.FC = observer(() => {
    return (
        <div>
            <Button
                sx={{
                    border: 1,
                    borderColor: "#EEE4FF",
                    width: "190px",
                    height: "40px",
                    transition: "all 0.5s",
                    ['@media (max-width:1350px)']: {
                        display: "none",
                    },
                    [':hover']: {
                        borderColor: "#AE8DE5"
                    },
                }}
                variant="contained"
            >
                {Languages.language === "ru" ? Languages.languages.buttons.investor.ru : Languages.languages.buttons.investor.eng}
            </Button>
        </div>
    );
});