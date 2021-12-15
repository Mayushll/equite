import {styled} from "@mui/material";
export const SelectorWrapper = styled("nav")({
    position: "relative",
    display: "flex",
    justifyContent:'center',
    zIndex: '9',
    width: "100vw",
    left: "-15vw",
    marginBottom: "8vh",
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
        left: "0",
    },
    [':nth-child(1n)']: {
        cursor: "pointer",
    },
})