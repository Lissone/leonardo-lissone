import styled from 'styled-components';

import { SectionContainer } from '../styles';

export const Container = styled(SectionContainer)`
  min-height: calc(100vh - 90px); // Header height

  margin-top: 90px; // Header height

  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 450px) {
    padding-top: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1650px;

  margin: 0 auto;
`;

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
`;

export const ResumeText = styled.div`
  max-width: 52rem;

  padding-top: 1rem;

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

  @media (max-width: 1240px) {
    max-width: 40rem;
  }
`;

export const HighlightText = styled.span`
  color: var(--red-200);
`;

export const SocialsContainer = styled.span`
  padding-top: 2rem;

  display: none;
  align-items: center;
  gap: 1.275rem;

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

  @media (max-width: 920px) or (max-height: 500px) {
    display: flex;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.275rem;

  @media (max-height: 630px) {
    margin-top: 2rem;
  }
`;

export const ResumeLinkButton = styled.a`
  padding: 0.8rem 3.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.2rem;

  border: 1px solid var(--red-400);
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 1.25rem rgba(202, 62, 71, 0.7);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    color: var(--red-400);
  }

  @media (max-width: 300px) {
    padding: 0.8rem 2.5rem;
  }
`;

export const ContactButton = styled.button`
  padding: 0.8rem 3rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.2rem;

  border: 1px solid var(--gray-800);
  border-radius: 0.25rem;

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    border-color: var(--red-400);
    box-shadow: 0rem 0rem 1.25rem rgba(202, 62, 71, 0.7);

    color: var(--red-400);
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 44rem;

    @media (max-width: 1240px) or (min-height: 980px) {
      height: 38rem;
    }

    @media (min-height: 980px) {
      height: 30rem;
    }
  }

  @media (max-width: 980px) or (max-height: 680px) {
    display: none;
  }
`;
