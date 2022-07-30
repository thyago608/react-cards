import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }

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
        background: #222;
    }

    button{
        background:none;
    }

    ul{
        list-style:none;
    }

    a{
        text-decoration:none;
    }
`;
