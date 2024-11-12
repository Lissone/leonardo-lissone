import styled from 'styled-components';

import { HeadingContainer, SectionContainer } from '../styles';

export const Container = styled(SectionContainer)``;

export const Content = styled.div`
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 1430px) {
    max-width: 795px;
  }

  @media (max-width: 1080px) {
    max-width: 745px;
  }

  @media (max-width: 835px) {
    max-width: none;
  }
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Heading = styled(HeadingContainer)`
  align-items: center;
  text-align: center;
`;

export const FilterContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  max-width: 24rem;

  display: flex;
  align-items: center;

  border: 1px solid var(--gray-800);
  border-radius: 0.25rem;

  color: var(--gray-300);

  transition: all 0.2s;

  &:focus-within {
    border: 1px solid var(--red-400);
    box-shadow: 0rem 0rem 0.35rem var(--red-400);
    
    color: var(--red-400);
  }

  svg {
    margin-left: 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0.875rem 1rem;

    font-size: 1.125rem;

    border-radius: 0.25rem;
    
    outline: 0;
    
    color: var(--gray-100);
    background-color: transparent;

    &::placeholder {
      color: var(--gray-600);
    }
  }

  @media (max-width: 835px) {
    max-width: 19.4rem; //! alterar para px?
  }
`;

export const FilterButton = styled.button`
  padding: 1rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--gray-800);
  border-radius: 0.25rem;

  color: var(--gray-300);
  background-color: transparent;

  transition: all 0.2s;

  &:hover {
    border: 1px solid var(--red-400);
    box-shadow: 0rem 0rem 0.35rem var(--red-400);
  }
`;

export const FilterBadge = styled.div`
  width: 1rem;
  height: 1rem;

  position: absolute;
  right: 0.35rem;
  top: 0.35rem;

  font-size: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  border-radius: 100%;

  color: var(--gray-100);
  background: var(--red-400);
`;

export const ProjectsList = styled.div`
  padding-top: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  gap: 1.5rem;

  @media (max-width: 1430px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 835px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowMoreButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  
  font-size: 1.2rem;

  border: 1px solid var(--gray-800);
  border-radius: 0.25rem;

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);

    box-shadow: 0rem 0rem 1rem var(--red-400);
    border-color: var(--red-400);
  }
`;

export const NotFoundText = styled.span`
  font-size: 1.25rem;

  text-align: center;

  color: var(--red-400);

  @media (max-width: 850px) {
    max-width: 280px;
  }
`;
