import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
    height: 100vh;
    width: 100vw;
  }

  body{ 
    margin: 0;
    padding: 0;
    box-sizing: border box;
    height: 100%;
		
  }

  #app{
    display: flex;
    flex-direction: center;
    height: 100%;
    width: 100%;
    background: #f6f7fb;
  }
`;
