import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-left: 5rem;

  position: fixed;

  bottom: -1rem;
  left: 0;
  right: 94rem;

  z-index: 100;

  @media (max-width: 920px) or (max-height: 500px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    opacity: 0.75;

    transition: 0.3s all;

    &:hover {
      transform: scale(1.08);

      svg {
        color: var(--red-400);
        filter: drop-shadow(0 0 .675rem rgba(202, 62, 71, 0.7));
      }
    }

    svg {
      color: var(--gray-600);

      transition: 0.3s all;
    }
  }

  img {
    height: 8.8rem;
    margin-top: 0.5rem;
  }
`;
