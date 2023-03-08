import styled from 'styled-components'

export const Container = styled.section`
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
  }

  @media (max-width: 650px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 360px) {
    padding: 2rem 1.5rem;
  }
`

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  text-align: center;
  line-height: 3rem;
  text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

  color: var(--red-400);

  @media (max-width: 840px) {
    font-size: 2rem;
  }
`

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 1056px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1350px) {
    max-width: 688px;
  }

  @media (max-width: 1080px) {
    max-width: 645px;
  }

  @media (max-width: 850px) {
    max-width: 300px;
  }

  @media (max-width: 720px) {
    max-width: 280px;
  }

  @media (max-width: 450px) {
    max-width: 260px;
  }

  span {
    font-size: 1.25rem;

    color: var(--gray-300);
  }
`

export const Content = styled.div`
  padding-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

export const ShowMoreButton = styled.button`
  margin-top: 4rem;
  padding: 0.8rem 4.2rem;

  font-size: 1.2rem;

  border: 2px solid var(--gray-800);
  border-radius: 0.5rem;

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    box-shadow: 0rem 0rem 1rem var(--red-400);
    border-color: var(--red-400);
  }
`

export const NotFoundText = styled.span`
  font-size: 1.25rem;

  text-align: center;

  color: var(--red-400);

  @media (max-width: 850px) {
    max-width: 280px;
  }
`
