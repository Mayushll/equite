import {styled} from "@mui/material";
import Languages from "../../../store/Languages";
import {observer} from "mobx-react";

export const BottomImage = observer(styled(`div`)({
    position: "absolute",
    bottom: Languages.language === "ru" ? "-100vh" : "-10vh",
    left: "-15vw",
    zIndex: "-1",
    width: "100vw",
    height: "500px",
    ['@media (max-width:1800px)']: {
        left: "-10vw",
    },
    ['@media (max-width:1600px)']: {
        left: "-8vw",
    },
    ['@media (max-width:1500px)']: {
        left: "-5vw",
    },
    ['@media (max-width:1400px)']: {
        left: "0vw",
    },
    ['@media (max-width:700px)']: {
        left: "0vw",
        bottom: "-12vh",
    },
}))