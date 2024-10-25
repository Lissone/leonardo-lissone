import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.25rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;

    line-height: 3.2rem;
    text-align: center;

    color: var(--gray-100);

    @media (max-width: 680px) {
      font-size: 2.8rem;
    }
  }
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;

    text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }
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
  max-width: 22rem;

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

  @media (max-width: 850px) {
    max-width: 19.4rem;
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

export const Content = styled.div`
  padding-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1.5rem;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowMoreButton = styled.button`
  margin-top: 4rem;
  padding: 0.8rem 4.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  font-size: 1.2rem;

  border: 2px solid var(--gray-800);
  border-radius: 0.25rem;

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

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
