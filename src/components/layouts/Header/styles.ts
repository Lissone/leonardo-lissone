import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  position: fixed;
  z-index: 10;

  box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 0.25);

  background: var(--gray-800);
`;

export const Content = styled.div`
  max-width: calc(1600px + (2rem * 2)); // base width + padding

  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;

  @media (max-width: 920px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 450px) {
    padding-left: 0.75rem;
    padding-right: 1rem;
  }
`;

export const Hamburguer = styled.div`
  display: none;

  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.85);
  }

  @media (max-width: 920px) {
    margin-right: 1rem;

    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const PhotoContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  img {
      width: 14rem;
      height: 14rem;
    }

  img:nth-child(2) {
    width: 11rem;
    height: 11rem;

    top: 1.4rem;
    position: absolute;

    object-fit: cover;

    border-radius: 100%;
  }
`;

export const LanguageMobileSwitchContainer = styled.nav`
  padding: 0 2.75rem;

  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

export const ResumeButton = styled.a`
  padding: 0.7rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 600;

  border: 2px solid var(--red-400);
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 1.25rem var(--red-400);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    color: var(--red-400);
  }
`;
