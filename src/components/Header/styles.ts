import Switch from 'react-switch'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  position: fixed;
  z-index: 10;

  box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 0.25);

  background: var(--gray-800);
`

export const Content = styled.div`
  padding: 0 3rem;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr;

  @media (max-width: 770px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    padding-right: 1rem;
  }
`

export const Hamburguer = styled.div`
  display: none;

  cursor: pointer;

  @media (max-width: 770px) {
    margin-right: 2rem;

    display: flex;
  }
`

interface MenuProps {
  isOpen: boolean
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 770px) {
    width: 18rem;
    height: 100vh;
    padding-top: 2.5rem;

    position: fixed;
    z-index: 15;

    top: 0rem;
    left: ${({ isOpen }) => (isOpen ? '0' : '0.65rem')};

    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    overflow: hidden;

    flex-direction: column;
    justify-content: flex-start;
    gap: 6rem;

    background: var(--gray-800);

    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'translate(-110%, 0)')};

    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
`

export const Navigation = styled.nav`
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`

export const LanguageSwitch = styled(Switch)`
  border: 2px solid var(--red-400);
  box-shadow: 0rem 0rem 1.25rem var(--red-400);
`

export const ResumeButton = styled.a`
  padding: 0.7rem 2.4rem;

  font-weight: 600;

  border: 2px solid var(--red-400);
  border-radius: 0.2rem;
  box-shadow: 0rem 0rem 1.25rem var(--red-400);

  color: var(--red-400);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 770px) {
    font-size: 1.3rem;
  }
`
