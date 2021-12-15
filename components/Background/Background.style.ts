import {styled} from "@mui/material";

export const Back = styled(`main`)({
    display: "block",
    position: "absolute",
    zIndex: "1",
    width: "1500px",
    height: "700px",
    right: "0",
    top: "0",
    ['@media (max-width:1500px)']: {
        width: "1200px",
        height: "600px",
    },
    ['@media (max-width:1200px)']: {
        width: "900px",
        height: "500px",
        top: "5vh"
    },
    ['@media (max-width:830px)']: {
        width: "100vw",
        height: "400px",
        top: "30vh"
    },
    ['@media (max-width:830px) and (max-height: 700px)']: {
        width: "100vw",
        height: "400px",
        top: "15vh"
    },
})
export const PurpleSquare = styled(`main`)({
    position: "absolute",
    left: "50%",
    zIndex: 10,
    width: "20vw",
    height: "20vw",
})
export const PinkSquare = styled(`main`)({
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
