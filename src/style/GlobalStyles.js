import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
        box-sizing: border-box;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Montserrat', sans-serif;
}


*, *::before, *::after {
        box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button {
        margin: 0;
        color: #333;
}

ul {
        list-style: none;
        padding: 0;
}

button {
        background: transparent;
        border: 0;
        outline: 0;
}

body {
        /* background: #fefefe; */
        min-height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%;
        background: #dadada;

}

/* #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
} */
`;
