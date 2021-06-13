import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import instructors from "./data";
import {BrowserRouter} from 'react-router-dom';

const theme = {
  black: "#282c34",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }
`;
// I am giving <a> tags this property to avoid <Link> tags underlining stuff

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <App instructors={instructors} />
      </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
