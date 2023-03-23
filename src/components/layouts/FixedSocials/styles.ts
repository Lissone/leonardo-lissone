import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  margin-left: 5rem;

  position: fixed;

  bottom: -1rem;
  left: 0;
  right: 90.5rem;

  z-index: 100;

  @media (max-width: 920px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    transition: 0.3s all;

    &:hover {
      transform: scale(1.08);
      filter: brightness(0.9);
    }

    svg {
      color: var(--gray-600);
    }
  }

  img {
    height: 8.8rem;
    margin-top: 0.5rem;
  }
`
