import { Link as Scroll } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 5.625rem; // header height
  padding-left: 4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    padding-right: 6rem;
  }

  @media (max-width: 770px) {
    padding-left: 6rem;
  }

  @media (max-width: 650px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: 500px) {
    height: 100%;
    padding-bottom: 5.625rem;
  }
`

export const Content = styled.div`
  max-width: 60rem;

  margin: 0 auto;
  padding-top: 6rem;

  display: flex;
  align-items: flex-start;

  img {
    margin-top: 6.2rem;
    margin-right: 1rem;

    @media (max-width: 770px) {
      display: none;
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    font-weight: 200;

    text-transform: uppercase;
    line-height: 2.5rem;

    color: var(--gray-300);
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 400;

    text-transform: uppercase;
    line-height: 2.5rem;

    color: var(--gray-100);
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;

    text-transform: uppercase;
    line-height: 3.5rem;
    text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }

  @media (max-width: 965px) {
    h3 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 2.15rem;
    }
  }
`

export const ResumeText = styled.div`
  padding-top: 1rem;

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

export const ContactButton = styled(Scroll)`
  margin-top: 4rem;
  padding: 0.8rem 4.2rem;

  font-size: 1.2rem;

  border: 1px solid var(--red-400);
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.875rem rgba(202, 62, 71, 0.7);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }
`

export const ImageContainer = styled.div`
  margin-left: 13.5rem;

  display: flex;
  align-items: center;

  img {
    height: 38rem;
  }

  @media (min-width: 1550px) {
    margin-left: 11rem;

    img {
      height: 44rem;
    }
  }

  @media (max-width: 1335px) {
    margin-left: 1rem;
  }

  @media (max-width: 965px) {
    display: none;
  }
`
