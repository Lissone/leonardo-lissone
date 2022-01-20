import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
  padding-left: 12rem;

  position: relative;

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  padding-top: 4rem;

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

export const Cable = styled.img`
  position: absolute;

  top: 6.5rem;
  right: 5rem;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 38rem;
  }
`
