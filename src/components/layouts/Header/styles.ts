import Switch from 'react-switch';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  position: fixed;
  z-index: 10;

  box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 0.25);

  background: var(--gray-800);
`;

export const Content = styled.div`
  padding: 0 3rem;

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
    margin-right: 2rem;

    display: flex;
  }
`;

interface MenuProps {
  readonly $isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: 18rem;
    height: 100vh;
    padding-top: 1.5rem;

    position: fixed;
    z-index: 15;

    top: 0rem;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '0.65rem')};

    opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0%')};
    overflow: hidden;

    flex-direction: column;
    justify-content: flex-start;

    background: var(--gray-800);
    box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 0.25);

    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'translate(-110%, 0)')};

    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
  
  @media (max-width: 920px) {
    margin-top: 1.5rem;
  }
`;

export const Navigation = styled.nav`
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 920px) {
    margin-top: 3rem;
    padding: 0 2rem;

    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

export const NavLinkTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  @media (max-width: 920px) {
    margin-top: auto;
    padding-bottom: 3rem;

    flex-direction: column;
  }
`;

export const LanguageSwitchContainer = styled(Switch)`
  border: 2px solid var(--red-400);
  box-shadow: 0rem 0rem 1.25rem var(--red-400);
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

  @media (max-width: 920px) {
    font-size: 1.3rem;
  }
`;
