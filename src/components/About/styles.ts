import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;

  position: relative;

  display: flex;
  justify-content: center;

  @media (min-width: 1550px) {
    padding-top: 8rem;
  }

  @media (max-width: 1350px) {
    height: 900px;
  }

  @media (max-width: 920px) {
    padding-left: 9rem;
    padding-right: 4rem;

    justify-content: flex-start;
  }

  @media (max-width: 770px) {
    padding-left: 6rem;
    padding-right: 4rem;
  }

  @media (max-height: 630px) {
    padding-top: 3rem;
  }

  @media (max-width: 650px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 20rem;

  @media (max-width: 1500px) {
    gap: 13rem;
  }

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 0;
  }
`

export const Column = styled.div`
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

    @media (max-width: 360px) {
      font-size: 2.7rem;
      line-height: 3.2rem;
    }
  }
`

export const Text = styled.div`
  max-width: 43rem;

  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  p {
    font-size: 1.2rem;

    em {
      font-style: normal;

      color: var(--red-200);
    }
  }

  @media (max-width: 920px) {
    max-width: 100%;
  }
`

export const HighlightText = styled.span`
  color: var(--red-200);
`

export const SkillsList = styled.ul`
  max-width: 34rem;
  padding-top: 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.2rem;
    font-weight: bold;

    color: var(--gray-500);
  }
`

export const PhotoContainer = styled.div`
  margin: 0 auto;

  position: relative;

  display: flex;
  justify-content: center;

  img {
    position: absolute;

    top: 3rem;
  }

  img:nth-child(2) {
    width: 24rem;
    height: 24rem;

    top: 6rem;

    object-fit: cover;

    border-radius: 100%;
  }

  @media (max-width: 1500px) {
    img {
      width: 28rem;
      height: 28rem;
    }

    img:nth-child(2) {
      width: 22rem;
      height: 22rem;

      top: 6rem;
    }
  }

  @media (max-width: 1300px) {
    img {
      width: 28rem;
      height: 28rem;
    }

    img:nth-child(2) {
      width: 22rem;
      height: 22rem;

      top: 6rem;
    }
  }

  @media (max-width: 420px) {
    img {
      width: 21rem;
      height: 21rem;
    }

    img:nth-child(2) {
      width: 16.5rem;
      height: 16.5rem;

      top: 5.25rem;
    }
  }
`
