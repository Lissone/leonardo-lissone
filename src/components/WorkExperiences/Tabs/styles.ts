import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 4rem;

  display: flex;
`

export const NavTabs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Tab = styled.li`
  width: 100%;

  list-style: none;

  button {
    padding: 1rem 2rem;

    font-size: 1.2rem;
    border-left: 4px solid var(--gray-800);

    color: var(--gray-500);
    background: none;

    transition: 0.3s filter;

    &:hover {
      filter: brightness(0.85);
    }
  }

  &.active button {
    border-color: var(--red-400);
    color: var(--gray-100);
  }
`

export const Content = styled.div`
  padding-left: 1.5rem;

  ul {
    padding-top: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    li {
      font-size: 1.2rem;

      display: flex;
      align-items: start;
      gap: 0.5rem;

      color: var(--gray-500);

      img {
        margin-top: 0.2rem;
      }
    }
  }
`

export const HeadingContentTab = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }

  span {
    margin-top: 0.25rem;

    font-size: 1.4rem;
  }
`

export const Highlight = styled.a`
  font-size: 2rem;

  color: var(--red-200);

  transition: 0.3s all;

  &:hover {
    text-decoration: underline;

    filter: brightness(0.9);
  }
`
