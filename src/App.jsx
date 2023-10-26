import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff9f00",
    },
    background: {
      default: "#eaeded",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters>
        <CssBaseline />
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
