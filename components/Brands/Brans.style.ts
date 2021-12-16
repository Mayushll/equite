import {styled} from "@mui/system";

export const Brand = styled(`div`)({
    paddingRight: "3vw",
    ['@media (max-width:830px)']: {
        [":nth-child(3n)"]: {
            paddingRight: "0vw",
        }
    },

})
export const BrandsWrapper = styled(`div`)({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(6, 235px);",
    zIndex: "1",
    alignItems: "center",
    ['@media (max-width:1400px)']: {
        padding: "0 2vw"
    },
    ['@media (max-width:1450px)']: {
        gridTemplateColumns: "repeat(6, 16vw);",
    },
    ['@media (max-width:700px)']: {
        gridTemplateColumns: "32vw 32vw 32vw;",
    },


})