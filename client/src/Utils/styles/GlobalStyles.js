import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --bg--primary-900: black;
        --bg--primary-800: #1a1a1a;
        --bg--primary-500: #353535;

        --accent--color-200: #00B2FF;

        --txt--color-100: whitesmoke;

        --sidebar--width: 20vw;
    }

    body{
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg--primary-900);
        color: var(--txt--color-100);
    }

    .mapboxgl-popup-content{
        padding: 0;
        border-radius: 1em;
        overflow: hidden;
    }

    .mapboxgl-popup-close-button{
        font-size: 2rem;
        color: white;
        right: .5em;
        top: .4em;
    }
`;
