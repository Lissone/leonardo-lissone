import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 5.625rem; // header height
  padding-left: 12rem;

  position: relative;

  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
`

export const Heading = styled.div`
  display: flex;
  gap: 0.8rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;

    line-height: 3.5rem;
    text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);

    color: var(--red-400);
  }
`

export const ContainerTabs = styled.div`
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

export const ContentTab = styled.div`
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

export const Cable = styled.img`
  position: absolute;

  top: 11.15rem;
  right: 5rem;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 38rem;
  }
`
