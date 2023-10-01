import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, h1, h2, h3, p, ul, li, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  } 
  /* Defina outros estilos globais aqui */
   body {
    font-family: 'Roboto', sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,196,44,1) 0%, rgba(186,64,123,1) 100%);
  }
   
`;

export default GlobalStyles;
