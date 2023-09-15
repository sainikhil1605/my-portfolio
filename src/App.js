import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: "Playfair Display",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
