import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans";
    }

    body{
        overflow-x: hidden;
    }

    ::-webkit-scrollbar{
        width: 8px;
    }
    
    ::-webkit-scrollbar-thumb{
        background-color: #6d0d29;
    }

    ::-webkit-scrollbar-track{
        background-color: #fefefe;
    }
`

export default GlobalStyle