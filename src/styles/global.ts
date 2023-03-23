import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --red-200: #D06C73;
    --red-400: #CA3E47;

    --gray-100: #D2D2D2;
    --gray-300: #979797;
    --gray-500: #7E7E7E;
    --gray-600: #666666;
    --gray-700: #525252;
    --gray-800: #414141;
    --gray-900: #313131;
    --gray-900-opacity-80: rgba(49, 49, 49, 0.8);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  @media (max-width: 450px) {
    html {
      font-size: 81.25%; //13px
    }
  }

  body {
    background: var(--gray-900);
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;

    border: 0;

    color: var(--gray-300);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--gray-100);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* ===== Modal ===== */
  .react-modal-overlay {
    position: fixed;
    top: 5.625rem; // tamanho do header
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
  }
  
  .react-modal-container {
    width: 100%;
    max-width: 576px;
    max-height: 650px;

    position: relative;

    border-radius: 0.5rem;

    background: var(--gray-900);

    &:focus {
      border: 0;
    }

    @media (max-width: 720px) {  
      margin: 0 2rem;
    }
  }

  /* ===== Scrollbar ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--red-400) var(--gray-800);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.2rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--gray-800);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--red-400);
  }

  ::-webkit-scrollbar-thumb:horizontal{
    background-color: var(--gray-600);
  }
`

interface GlobalOverlayProps {
  isActive: boolean
}

export const GlobalOverlay = styled.div<GlobalOverlayProps>`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: ${({ isActive }) => (isActive ? 'block' : 'none')}; /* Hidden by default */

  z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
  background-color: rgba(0, 0, 0, 0.5);
`
