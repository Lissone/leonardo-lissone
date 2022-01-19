import Switch from 'react-switch'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  position: fixed;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

  background: var(--gray-800);
`

export const Content = styled.div`
  padding: 0 4rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
`

export const Navigation = styled.nav`
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 3rem;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
`

export const LanguageSwitch = styled(Switch)`
  border: 2px solid var(--red-400);
  box-shadow: 0px 0px 20px var(--red-400);
`

export const ResumeButton = styled.button`
  padding: 0.7rem 2.4rem;

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
