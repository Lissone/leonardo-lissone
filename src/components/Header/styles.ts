import { Link as Scroll } from 'react-scroll'
import Switch from 'react-switch'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 100%;

  background: var(--gray-800);
`

export const Content = styled.div`
  /* max-width: 50rem; */
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const MenuLink = styled(Scroll)`
  display: flex;
  align-items: center;

  background: none;

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.12);
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const LanguageSwitch = styled(Switch)`
  border: 2px solid var(--red-400);
  box-shadow: 0px 0px 20px var(--red-400);
`

export const ResumeButton = styled.button`
  padding: 0.7rem 1.9rem;

  border: 2px solid var(--red-400);
  border-radius: 0.2rem;
  box-shadow: 0px 0px 20px var(--red-400);

  color: var(--red-400);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }
`
