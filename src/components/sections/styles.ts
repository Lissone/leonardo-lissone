import styled from 'styled-components';

// ---------------------------------------------------

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding: 4rem 0;
  padding-left: 11rem; // padding padrão com FixedSocials
  padding-right: 3rem;

  // padding padrão sem FixedSocials
  @media (max-width: 920px) or (min-height: 980px) {
    padding-left: 3rem;
  }

  @media (max-width: 920px) or (min-height: 980px) {
    min-height: auto;
  }
  
  @media (max-width: 450px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;

    line-height: 3.2rem;

    color: var(--gray-100);

    @media (max-width: 450px) {
      font-size: 2.8rem;
    }
  }

  .heading-subtitle {
    display: flex;
    align-items: center;
    gap: 0.35rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;

      text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

      color: var(--red-400);

      @media (max-width: 480px) {
        font-size: 1.4rem;
      }

      @media (max-width: 360px) {
        font-size: 1.3rem;
      }
    }
  }
`;
