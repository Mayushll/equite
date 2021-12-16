import {keyframes, styled} from "@mui/material";


const shadow = keyframes`
   from {
        box-shadow: 0 0 55px 10px white;
    }
    to {
        box-shadow: 0 0 200px 80px white;
    }
`
export const Point = styled(`div`)({
    position: "absolute",
    left: "52%",
    top: "17%",
    width: "0px",
    height: "0px",
    backgroundColor: "white",
    margin: "200px 0 0 200px",
    borderRadius: "50%",
    animation: `${shadow} 2s infinite alternate`,
    ['@media (max-width:1500px)']: {
        display: "none"
    },
})

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
