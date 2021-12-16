import {styled} from "@mui/material";

export const StyledNav = styled("nav")({
    zIndex: "999",
    position: "relative",
    display: "flex",
    height: "56px",
    fontFamily: "Gotham Pro, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "white",
    fontSize: "14px",
    lineHeight: "13px",
    textTransform: "uppercase",
    alignItems: "center",
    marginBottom: "83px",
    paddingTop: "10px",
    ['@media (max-width:1400px)']: {
        paddingLeft: "3vh",
    },
    ['@media (max-width:1130px)']: {
        marginRight: "4.5vw"
    },
})