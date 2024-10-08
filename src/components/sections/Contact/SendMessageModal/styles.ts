import styled from 'styled-components';

export const Content = styled.div`
  padding: 1.8rem 2.25rem;

  display: flex;
  flex-direction: column;

  @media (max-height: 820px) {
    max-height: 540px;

    overflow-y: scroll;
  }

  @media (max-height: 750px) {
    max-height: 400px;
  }

  @media (max-height: 620px) {
    max-height: 280px;
  }

  @media (max-height: 520px) {
    max-height: 200px;
  }

  span {
    color: var(--gray-100);

    @media (max-width: 370px) {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 1rem 1.5rem;

    font-size: 1.125rem;

    border-radius: 0.25rem;

    color: var(--gray-100);
    background-color: var(--gray-900);

    transition: 0.2s all;

    &:hover {
      border-color: var(--red-400);
      box-shadow: 0rem 0rem 0.5rem var(--red-400);
    }

    &:focus {
      outline: 0;

      border-color: var(--red-400);
      box-shadow: 0rem 0rem 0.5rem var(--red-400);
    }
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 1rem;
  padding: 1rem 2.25rem;

  font-size: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--red-400);
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 1rem rgba(202, 62, 71, 0.7);

  color: var(--gray-100);
  background: var(--gray-900);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.015);
  }
`;
