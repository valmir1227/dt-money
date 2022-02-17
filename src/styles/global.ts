import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --background: #f0f2f5;
    --green: #33cc95;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFF;
    
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //Font-size desktop = 16px
    // Usar assim por questões de acessibilidade!
    html {
        @media(max-width:1080px) {
            font-size: 93.75%; // 15px
        }
        @media(max-width:720px) {
           font-size: 87.5%; // 14px
    }
    }

    body {
        background: --background;
        -webkit-font-smoothing: antialiesed;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1,h2, h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
