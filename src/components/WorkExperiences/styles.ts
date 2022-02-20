import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
  padding-left: 12rem;

  position: relative;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1090px) {
    padding-left: 9rem;
    padding-right: 4rem;
  }

  @media (max-width: 770px) {
    padding-left: 6rem;
  }

  @media (max-width: 650px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

export const Content = styled.div`
  max-width: 62rem;

  margin: 0 auto;
  padding-top: 4rem;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`

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
`

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
`
