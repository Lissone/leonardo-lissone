import styled from 'styled-components';

// reference: https://css-loaders.com/spinner/ (The Spinner #3)
export const LoaderDiv = styled.div`
  width: 1.125rem;
  padding: 3px;
  aspect-ratio: 1;

  border-radius: 50%;
  background: var(--red-400);

  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: loading 1s infinite linear;

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
