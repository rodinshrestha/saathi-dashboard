"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


 .container {
    max-width: 1600px; /* optional: adjust for your breakpoint */
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

.container-fluid {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;  /* compensate for .col padding */
    margin-right: -1rem;
}


.col {
    flex: 1 0 0%;
    padding-left: 1rem;
    padding-right: 1rem;
     min-height: 1px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
}
`;
