import {styled} from "@mui/material";

export const MainWrapper = styled(`main`)({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "35vw",
    zIndex: "3",

    overflowWrap: "break-word",

    marginBottom: "6vh",
    fontFamily: "Gotham Pro, sans-serif",
    fontStyle: "normal",
    ['@media (max-width:1400px)']: {
        paddingLeft: "3vh",
        width: "55vw",
    },
    ['@media (max-width:1220px)']: {
        marginBottom: "3vh",
    },
    ['@media (max-width:830px)']: {
        paddingLeft: "0",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "50vw",

        margin: "0 auto",

        lineHeight: "30px",
    },
    ['@media (max-width:700px)']: {
        width: "70vw",
    },
    ['@media (max-width:550px)']: {
        width: "90vw",
    }
})
export const Title = styled(`div`)({
    display: "flex",
    fontWeight: "bold",
    fontSize: "2.5vw",
    marginBottom: "40px",
    lineHeight: "60px",
    letterSpacing: "0.03em",
    color: "#FFFFFF",
    ['@media (max-width:1220px)']: {
        marginBottom: "2vh",
        paddingRight: "15vw",
        lineHeight: "40px",
    },
    ['@media (max-width:830px)']: {
        fontSize: "30px",
        textAlign: "center",
        paddingRight: "0",
    },
    ['@media (max-width:700px)']: {
        marginBottom: "1vh",
        fontSize: "3vh",
        textAlign: "center",
        lineHeight: "30px",
    },
})

export const Subtitle = styled(`div`)({
    display: "flex",
    fontWeight: "300",
    fontSize: "2vw",
    lineHeight: "50px",
    marginBottom: "50px",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    zIndex: 10,
    color: "#AE8DE5",
    paddingRight: "8vw",
    ['@media (max-width:1200px)']: {
        lineHeight: "30px",
    },
    ['@media (max-width:830px)']: {
        fontSize: "20px",
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "2vh",
        lineHeight: "30px",
        paddingRight: "0",
    },
    ['@media (max-width:700px)']: {
        marginBottom: "1vh",
        fontSize: "3vh",
        textAlign: "center",
        lineHeight: "30px",
    },
})
