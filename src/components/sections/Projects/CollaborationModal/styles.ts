import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--gray-100);
  }

  ul {
    list-style: none;

    li {
      margin-top: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 370px) {
        flex-direction: column;
        gap: 1rem;
      }

      div {
        div:nth-child(1) {
          @media (max-width: 430px) {
            display: none;
          }
        }
      }

      div:nth-child(1) {
        display: flex;
        gap: 1rem;
      }
    }
  }
`

export const CollaboratorAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 3px;

  border: 2.5px solid var(--red-400);
  border-radius: 100%;

  box-shadow: 0rem 0rem 0.625rem var(--red-400);

  background: none;

  @media (max-width: 430px) {
    display: none;
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;

    background: var(--gray-600);

    img {
      width: 100%;
      height: 100%;

      border-radius: 100%;
    }

    .default-user-img {
      width: 70%;
      height: 70%;
    }
  }
`

export const CollaboratorInfos = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 370px) {
    text-align: center;
  }

  p {
    font-size: 0.9rem;
  }

  span {
    font-size: 1.25rem;
  }
`

export const CollaboratorSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    transition: 0.3s all;

    &:hover {
      transform: scale(1.08);
      filter: brightness(0.9);
    }

    svg {
      color: var(--gray-500);
    }
  }
`
