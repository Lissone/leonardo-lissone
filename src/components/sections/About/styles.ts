import styled from 'styled-components';

import { HeadingContainer, SectionContainer } from '../styles';

export const Container = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1370px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column = styled.div`
  width: fit-content;
  
  display: flex;
  flex-direction: column;
`;

export const Heading = styled(HeadingContainer)``;

export const Text = styled.div`
  max-width: 46rem;

  margin-top: 2rem;

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
`;

export const HighlightText = styled.span`
  color: var(--red-200);
`;

export const SkillsList = styled.ul`
  max-width: 34rem;

  margin-top: 1.5rem;

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
`;

export const PhotoContainer = styled.div`
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

  @media (max-width: 1080px) {
    img {
      width: 28rem;
      height: 28rem;
    }

    img:nth-child(2) {
      width: 22rem;
      height: 22rem;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 21rem;
      height: 21rem;
    }

    img:nth-child(2) {
      width: 16.75rem;
      height: 16.75rem;

      top: 2rem;
    }
  }
`;
