import styled from 'styled-components';

import { HeadingContainer, SectionContainer } from '../styles';

export const Container = styled(SectionContainer)`
  min-height: calc(100vh - 90px); // Header height
  
  margin-top: 90px; // Header height

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background: linear-gradient(
    179.96deg,
    rgba(49, 49, 49, 0.1) 38.91%,
    rgba(202, 62, 71, 0.5) 99.97%
  );
`;

export const Heading = styled(HeadingContainer)`
  align-items: center;
  text-align: center;

  h1 {
    @media (max-width: 540px) {
      font-size: 2.25rem;
    }

    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;

export const Text = styled.p`
  max-width: 50%;

  font-size: 1.2rem;

  text-align: center;

  @media (max-width: 920px) {
    max-width: 100%;
  }
`;

export const ContactButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 4rem;

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

export const BearingLedImage = styled.img`
  height: 44rem;

  position: absolute;
  bottom: -13.69rem;

  transform: rotateZ(90deg);

  @media (max-width: 635px) and (min-width: 495px) {
    height: 34rem;
    bottom: -10.55rem;

    @media (max-height: 670px) {
      display: none;
    }
  }

  @media (max-width: 495px) and (min-width: 370px) {
    height: 27rem;
    bottom: -8.4rem;

    @media (max-height: 660px) {
      display: none;
    }
  }

  @media (max-width: 370px) {
    height: 22rem;
    bottom: -6.8rem;

    @media (max-height: 600px) {
      display: none;
    }
  }

  @media (min-width: 636px) and (max-height: 700px) {
    display: none;
  }
`;
