import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;

  padding-top: 4rem;

  display: flex;

  @media (max-width: 750px) {
    padding-top: 3rem;

    flex-direction: column;
  }
`

export const NavTabs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 750px) {
    overflow-x: auto;
    overflow-y: hidden;

    flex-direction: row;
  }
`

export const Tab = styled.li`
  list-style: none;

  button {
    padding: 1rem 2rem;

    font-size: 1.2rem;
    border-left: 0.25rem solid var(--gray-800);

    color: var(--gray-500);
    background: none;

    transition: 0.3s filter;

    &:hover {
      filter: brightness(0.85);
    }

    @media (max-width: 750px) {
      border-left: 0;
      border-top: 0.25rem solid var(--gray-800);
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

  @media (max-width: 750px) {
    padding-left: 0;
    padding-top: 1.5rem;
  }
`

export const ContentTab = styled.div`
  margin-bottom: 3.5rem;
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

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.2rem;
    }
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

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
