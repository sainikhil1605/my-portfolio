import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import { ThemeProvider, createTheme } from "@mui/material";
import AboutMe from "./components/About";

function App() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: "Montserrat",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
