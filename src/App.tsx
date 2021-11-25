import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./Assets/styles/globals/themeGlobal";
import GlobalStyled from "./Assets/styles/globals/globalStyled";
import RoutesComponent from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
