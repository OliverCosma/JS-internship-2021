import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#BD7938',
            dark: '#532700',
            // dark: '#260401'
        },
        secondary: {
            main: '#BFAE9F',
            light: '#F2EBD5'
        }
    },
    typography: {
        fontFamily: '"Lexend", "Abril Fatface"',
        h1: {
            fontFamily: "Abril Fatface",
            fontSize: '5rem',
            marginBottom: '1rem'
        },
        h2: {
            fontFamily: "Abril Fatface",
            fontSize: '2rem',
            color: '#260401',
            marginBottom: '1rem'
        },
        h3: {
            fontFamily: 'Lexend',
            fontWeight: 500,
            color: '#260401',
            fontSize: '1.25rem',
            marginBottom: '1rem'
        },
        h4: {
            fontFamily: 'Lexend',
            fontWeight: 400,
            color: '#260401',
            fontSize: '1rem',
            marginBottom: '1rem'
        },
        p: {
            marginBlock: 0
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: "#fff"
            },
            containedPrimary: {
                color: "#fff",

            }
        },

    }
})
export default theme;