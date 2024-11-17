import styled from 'styled-components';

import { ModalContent } from '@components/shared/Modal/styles';

export const Content = styled(ModalContent)`
  display: flex;
  flex-direction: column;

  span {
    color: var(--gray-100);

    @media (max-width: 370px) {
      text-align: center;
    }
  }

  ul {
    list-style: none;

    li {
      margin-top: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

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

      @media (max-width: 370px) {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export const CollaboratorAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 3px;

  border: 2.5px solid var(--red-400);
  border-radius: 100%;

  box-shadow: 0rem 0rem 0.625rem var(--red-400);

  background: none;

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

  @media (max-width: 430px) {
    display: none;
  }
`;

export const CollaboratorInfos = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.9rem;
  }

  span {
    font-size: 1.25rem;
  }

  @media (max-width: 370px) {
    text-align: center;
  }
`;

export const CollaboratorSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    transition: 0.3s all;

    &:hover {
      transform: scale(1.08);

      svg {
        color: var(--red-400);
        filter: drop-shadow(0 0 .675rem rgba(202, 62, 71, 0.7));
      }
    }

    svg {
      color: var(--gray-500);

      transition: 0.3s all;
    }
  }
`;
