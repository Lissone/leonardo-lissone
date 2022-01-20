import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .cable {
      position: absolute;

      top: 1.4rem;
      right: 44.3rem;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;

    line-height: 3.5rem;
    text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }

  button {
    background: none;

    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
      filter: brightness(0.85);
    }

    svg {
      color: var(--gray-600);
    }
  }
`

export const Content = styled.div`
  padding-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`
