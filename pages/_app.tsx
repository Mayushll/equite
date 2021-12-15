import '../styles/globals.css'
import {createTheme, PaletteColor, PaletteColorOptions} from "@mui/material";
import {ThemeProvider} from "@emotion/react";


const theme = createTheme({
  palette: {
    primary: {
        main: "#101C2B",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}> <Component {...pageProps} /> </ThemeProvider>
}

export default MyApp
