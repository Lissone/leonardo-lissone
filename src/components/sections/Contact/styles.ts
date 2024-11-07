import styled from 'styled-components';

import { HeadingContainer, SectionContainer } from '../styles';

export const Container = styled(SectionContainer)`
  min-height: calc(100vh - 5.625rem); // Header height
  
  margin-top: 5.625rem; // Header height

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
    179.96deg,
    rgba(49, 49, 49, 0.1) 38.91%,
    rgba(202, 62, 71, 0.5) 99.97%
  );

  .bearing-led {
    height: 44rem;
    z-index: 0;

    position: absolute;
    bottom: -13.6rem;

    transform: rotateZ(90deg);

    @media (max-width: 630px) {
      height: 34rem;

      bottom: -10.5rem;
    }

    @media (max-width: 480px) {
      height: 28rem;

      bottom: -8.7rem;
    }

    @media (max-width: 370px) {
      height: 24rem;

      bottom: -7.5rem;
    }

    @media (min-width: 920px) {
      @media (max-height: 640px) {
        display: none;
      }
    }

    @media (max-width: 920px) {
      @media(max-height: 700px) {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 350px) {
    padding: 0 2rem;
  }
`;

export const Heading = styled(HeadingContainer)`
  align-items: center;
  text-align: center;

  h1 {
    text-align: center;

    @media (max-width: 850px) {
      font-size: 2.5rem;
    }

    @media (max-width: 540px) {
      font-size: 2.25rem;
    }

    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;

export const Text = styled.p`
  max-width: 60%;

  font-size: 1.2rem;

  text-align: center;

  @media (max-width: 900px) {
    max-width: 80%;
  }
`;

export const ContactButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 4.2rem;

  display: flex;
  align-items: center;
  gap: 0.875rem;

  font-size: 1.2rem;

  border: 1px solid var(--red-400);
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 1.875rem rgba(202, 62, 71, 0.7);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 340px) {
    padding: 0.8rem 3rem;
  }
`;

export const Socials = styled.div`
  margin-top: 1rem;

  display: none;
  gap: 2rem;

  a {
    opacity: 0.75;

    transition: 0.3s all;

    &:hover {
      transform: scale(1.08);

      svg {
        color: var(--red-400);
        filter: drop-shadow(0 0 .675rem rgba(202, 62, 71, 0.7));
      }
    }

    svg {
      color: var(--gray-600);

      transition: 0.3s all;
    }
  }

  @media (max-width: 920px) {
    display: flex;
  }
`;
