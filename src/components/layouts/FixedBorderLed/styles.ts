import styled from 'styled-components'

export const Container = styled.div`
  width: 0.625rem;

  z-index: 10;
  box-shadow: 0rem 0rem 0.625rem var(--red-400);

  background: var(--red-400);

  @media (max-width: 520px) {
    display: none;
  }
`
