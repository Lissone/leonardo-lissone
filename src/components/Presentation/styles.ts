import { Link as Scroll } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 5.625rem);
  padding-left: 4rem;

  display: flex;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 38rem;
  }
`

export const Content = styled.div`
  padding-top: 6rem;

  display: flex;
  align-items: flex-start;

  img {
    margin-top: 6.2rem;
    margin-right: 1rem;
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
    border: 1px solid var(--gray-900-opacity-80);
    text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }
`

export const ResumeText = styled.div`
  max-width: 56rem;
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
  box-shadow: 0px 0px 30px rgba(202, 62, 71, 0.7);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }
`
