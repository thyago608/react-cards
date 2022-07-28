import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body, input, select, textarea, button{
        font-family:"Roboto", sansr-serif;
        font-weight: 400;
    }

    body{
        background: #111;
    }

    button{
        background:none;
        cursor: pointer;
    }

    ul{
        list-style:none;
    }

    a{
        text-decoration:none;
    }
`;
