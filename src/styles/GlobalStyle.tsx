// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    /* margin: 0; */
    background-color: #fdfcf9; /* Mycket ljus färg */
    color: #222;
    font-family: 'Inter', sans-serif; /* Brödtext */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif; /* Rubriker */
    font-weight: 700;
  }
`;
