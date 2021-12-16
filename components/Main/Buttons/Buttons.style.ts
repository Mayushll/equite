import {styled} from "@mui/material";

export const ButtonsWrapper = styled(`div`)({
    marginBottom: "0vh",
    ['@media (max-width:830px)']: {
        marginBottom: "25vh"
    },
    ['@media (max-width:830px) and (max-height: 800px)']: {
        marginBottom: "25vh"
    },
    ['@media (max-width:830px) and (max-height: 700px)']: {
        marginBottom: "18vh"
    },
    ['@media (max-width:830px) and (max-height: 650px)']: {
        marginBottom: "15vh"
    },
    ['@media (max-width:830px) and (max-height: 600px)']: {
        marginBottom: "9vh"
    },
    ['@media (max-width:830px) and (max-height: 550px)']: {
        marginBottom: "5vh"
    },
    ['@media (max-width:830px) and (max-height: 500px)']: {
        marginBottom: "0vh"
    },
})