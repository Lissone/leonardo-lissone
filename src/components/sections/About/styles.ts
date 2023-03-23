import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;

  @media (max-width: 1430px) or (max-height: 640px) {
    height: 100%;
    margin: 3rem 0;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 1430px) {
    padding: 0 4rem;

    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  @media (max-width: 450px) {
    padding: 0 2rem;
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

  img:nth-child(2) {
    width: 24rem;
    height: 24rem;

    position: absolute;
    top: 3rem;

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

      top: 2rem;
    }
  }
`
