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
        color: ${({ theme }) => theme.color};
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
        min-height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%;
        background: ${({ theme }) => theme.bgColor};

}

.body{
  overflow-y: hidden;
}

`;
