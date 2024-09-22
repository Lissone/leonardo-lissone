import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 6rem;
  padding-left: 9rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1090px) {
    padding-right: 4rem;
  }

  @media (max-width: 920px) {
    margin: 0;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 540px) {
    padding-top: 3rem;
  }

  @media (max-width: 450px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  gap: 0.8rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;

    line-height: 3.5rem;
    text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

    color: var(--red-400);

    @media (max-width: 680px) {
      font-size: 2.5rem;
    }

    @media (max-width: 580px) {
      font-size: 2.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1.9rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 38rem;

    @media (max-width: 1225px) {
      height: 30rem;
    }

    @media (max-width: 1090px) {
      display: none;
    }
  }
`;
