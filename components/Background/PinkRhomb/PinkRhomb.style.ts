import {styled} from "@mui/material";

export const StyledPinkRhomb = styled(`main`)({
    position: "absolute",
    width: "20vw",
    height: "20vw",
    zIndex: 1,
    bottom: "36vh",
    right: 0,
    ['@media (max-width:1220px)']: {
        zIndex: 999999,
    },
})