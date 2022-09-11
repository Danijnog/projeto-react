import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f8f2f5;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //tamanho da fonte padrao pra desktop: 16px

    html {
        @media (max-width: 1080px) { //para tela de ate 1080px de largura, o tamanho da fonte sera de 93.75%, ou seja a fonte sera de 15px
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //a fonte vai ficar de 14px;
        }
    }
    //REM: 1 rem = tamanho definido para a fonte (aqui foi 16px)

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`