import React from 'react';
import Button from "@mui/material/Button";
import Languages from "../../../store/Languages";
import {observer} from "mobx-react";

interface Props{
    width: number
    sx: object
}

export const StartButton:React.FC<Props>= observer(({width, sx = []}) => {
    return (
        <Button
            sx={[
                {
                    width: {width},
                    height: "40px",
                    background: "#5040B2",
                    boxShadow: "0px 0px 20px rgba(188, 79, 255, 0.7)",
                    borderRadius: "5px",
                    marginRight: "28px",
                    fontWeight: 500,
                    ['@media (max-width:850px)']: {
                        width: "140px",
                    },
                    ['@media (max-width:400px) and (max-height: 900px)']: {
                        width: "120px",
                    },
                    [':hover']: {
                        color: "#AE8DE5",
                        background: "#5040B2",
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx])
            ]}
            variant="contained"
        >
            {Languages.language === "ru" ? Languages.languages.buttons.start.ru : Languages.languages.buttons.start.eng}
        </Button>
    );
});