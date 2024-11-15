import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  .header-divider {
    width: 100%;
    height: 1px;

    background: var(--gray-800);
  }
`;

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
`;

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
`;

export const ModalContent = styled.div`
  padding: 1.8rem 2.25rem;

  display: flex;
  flex-direction: column;

  span {
    color: var(--gray-100);

    @media (max-width: 370px) {
      text-align: center;
    }
  }

  @media (max-height: 750px) {
    max-height: 480px;
    
    overflow-y: scroll;
  }

  @media (max-height: 660px) {
    max-height: 380px;
  }

  @media (max-height: 560px) {
    max-height: 280px;
  }

  @media (max-height: 460px) {
    max-height: 200px;
  }
`;
