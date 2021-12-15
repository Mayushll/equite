import {styled} from "@mui/material";

export const NavLogo = styled(`div`)({
    marginRight: "60px",
    display: "flex",
    alignItems: "center",
    ['@media (max-width:500px)']: {
        marginRight: "10px",
    },
})

export const NavText= styled(`div`)({
    display: "none",
    fontFamily: "Gotham Pro, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "19px",
    textTransform: "uppercase",
    marginLeft: "10px",
    ['@media (max-width:1350px)']: {
        display: "block",
    },
})