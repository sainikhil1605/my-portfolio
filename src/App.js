import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import { ThemeProvider, createTheme } from "@mui/material";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: "Montserrat",
        },
        styleOverrides: {
          h1: {
            fontSize: "50px",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <AboutMe />
      <Experience />
      <Achievements />
    </ThemeProvider>
  );
}

export default App;
