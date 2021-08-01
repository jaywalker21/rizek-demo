import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./views/commute-search";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5"
    },
    secondary: { main: "#f44336" }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <App />
    </Container>
  </ThemeProvider>,
  document.getElementById("root")
);
