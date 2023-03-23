import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  .header-divider {
    width: 100%;
    height: 1px;

    box-shadow: 0rem 0rem 0.625rem var(--red-400);

    background: var(--red-400);
  }
`

export const HeaderContent = styled.div`
  padding: 1.5rem 2.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 370px) {
    justify-content: center;
    text-align: center;
  }

  button {
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 370px) {
      display: none;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.65rem;

    @media (max-width: 490px) {
      font-size: 1.35rem;
    }
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }
  }
`

export const Content = styled.div`
  padding: 1.8rem 2.25rem;

  @media (max-height: 680px) {
    max-height: 320px;

    overflow-y: scroll;
  }
`
