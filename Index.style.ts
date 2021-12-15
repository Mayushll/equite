import {styled} from "@mui/material";

export const AppWrapper = styled(`div`)({
    marginLeft: "15vw",
    ['@media (max-width:1800px)']: {
        marginLeft: "10vw"
    },
    ['@media (max-width:1600px)']: {
        marginLeft: "8vw"
    },
    ['@media (max-width:1500px)']: {
        marginLeft: "5vw"
    },
    ['@media (max-width:1400px)']: {
        marginLeft: "0vw"
    },
})