import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans', sans-serif;
}
html, body{
    overflow-x: hidden;
    scroll-padding: 50px;
    scroll-behavior: smooth;
    background-color: #000;
}


`;

export default GlobalStyle;
