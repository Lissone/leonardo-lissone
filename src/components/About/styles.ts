import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 6rem 0 12rem;

  position: relative;

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
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
    text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }
`

export const Text = styled.div`
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

export const Cable = styled.img`
  position: absolute;

  top: 4.6rem;
  left: 31rem;
`

export const PhotoContainer = styled.div`
  width: 100%;

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
