import {styled} from "@mui/material";

export const NavItem = styled(`div`)({
    padding: "30px",
    transition: "all 0.5s",
    ['@media (max-width:1130px)']: {
        display: "none",
    },
    [':hover']: {
        color: "#AE8DE5",
    },
})