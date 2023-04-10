import React, { useEffect } from "react";
import Home from "./components/Home";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
#root {
    margin: 0;
}
`;




const App = () => {
  
  return (
    <>
       <GlobalStyle />
        <Home />
        
    </>
  );
};

export default App;

