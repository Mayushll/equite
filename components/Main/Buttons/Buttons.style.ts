import {styled} from "@mui/material";

export const ButtonsWrapper = styled(`div`)({
    marginBottom: "0vh",
    ['@media (max-width:830px)']: {
        marginBottom: "35vh"
    },
    ['@media (max-width:830px) and (max-height: 800px)']: {
        marginBottom: "30vh"
    },
    ['@media (max-width:830px) and (max-height: 650px)']: {
        marginBottom: "25vh"
    },
    ['@media (max-width:830px) and (max-height: 550px)']: {
        marginBottom: "15vh"
    },
    ['@media (max-width:830px) and (max-height: 500px)']: {
        marginBottom: "10vh"
    },
})