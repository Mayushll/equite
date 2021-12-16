import {styled} from "@mui/material";

export const ButtonsWrapper = styled("div")({
    marginLeft: "auto",
    marginRight: "14.7vw",
    ['@media (max-width:1800px)']: {
        marginRight: "7vw"
    },
    ['@media (max-width:1500px)']: {
        marginRight: "3vw"
    },
    ['@media (max-width:1130px)']: {
        marginRight: "0vw"
    },
})
