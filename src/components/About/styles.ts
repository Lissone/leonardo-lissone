import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 5rem 6rem 0 12rem;

  position: relative;

  @media (min-width: 1550px) {
    display: flex;
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 20rem;
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
    top: 6rem;
  }
`

export const Cable = styled.img`
  margin-left: auto;
  margin-right: auto;

  position: absolute;

  top: 6.5rem;
  left: 11rem;
  right: 0;

  @media (min-width: 1550px) {
    left: 25rem;
  }
`
