import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --light: #FEF2F2;
        --dark: #2d2d2d;
        --taupe: #E4C2C1;
        --plum: #B6666F;
        --maroon: #F53163;
        --tan: #D1A080;
        --classy: 'Playfair Display', serif;
        --modern: 'Quicksand', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--classy);
        color: var(--dark);
    }

    *::selection {
        background: var(--plum);
        color: var(--light);
    }
    
    body {
        background: var(--light);
        overflow: ${(props) => (props.scrollLock ? "hidden" : "default")};
    }

    section {
        position: relative;
        height: 100vh;
        min-height: 38rem;
        /* overflow-x: hidden !important; */
        overflow: ${(props) => (props.scrollLock ? "hidden" : "default")};
    }

    .sectionTitle {
      color: var(--maroon);
      font-size: calc(1rem + 1.8vw);
      font-weight: 100;
      letter-spacing: 0.3rem;
      line-height: 140%;
    }
    

    .link {
        text-decoration: none;
        font-size: calc(0.6rem + 0.8vw);
        font-weight: 600;
        color: var(--maroon);
        letter-spacing: 0.1rem;
    }

    .a11y {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    @keyframes fade {
        to {
            opacity: 1;
        }
    }
`;

export default GlobalStyles;
