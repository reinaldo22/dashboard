import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:0;
        outline:0;
    }
    html, body, #root{
        height: 100%;
    }
    body{
        font-family:'Roboto', sans-serif;
    }

`