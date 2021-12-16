import {styled} from "@mui/material";

export const NavItem = styled(`div`)({
    padding: "30px",
    transition: "all 0.5s",
    [':hover']: {
        color: "#AE8DE5",
    },

})
export const BurgerWrapper = styled(`div`)({
    cursor: "pointer",
    display: "none",
    ['@media (max-width:1130px)']: {
        display: "block",
    },
    [':hover']: {
        filter: 'brightness(0.8)'
    },
})