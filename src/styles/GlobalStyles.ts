import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #0A0A0A; // Obsidian black
    --color-primary: #141414; // Deep graphite
    --color-secondary: #1E1E1E;
    --color-tertiary: #2A2A2A;
    --color-text-primary: #E0E0E0;
    --color-text-secondary: #A0A0A0;
    --color-accent-blue: #00AEEF;
    --color-accent-green: #00F0B5;
    --color-accent-red: #F00055;
    --font-primary: 'PT Sans', sans-serif;
    --font-secondary: 'monospace';
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: thin;
    scrollbar-color: var(--color-tertiary) var(--color-background);
  }

  /* Webkit Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-tertiary);
    border-radius: 4px;
    border: 2px solid var(--color-background);
  }

  a {
    color: var(--color-accent-blue);
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  /* REMOVE ALL HOVER EFFECTS */
  *:hover {
    /* Per instructions, no hover effects */
    outline: none;
  }

  /* Custom selection style for the 'surgical' feel */
  ::selection {
    background: var(--color-accent-blue);
    color: var(--color-background);
  }
`;

export default GlobalStyle;
