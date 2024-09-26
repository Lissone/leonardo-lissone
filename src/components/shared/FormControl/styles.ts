import styled from 'styled-components';

interface ContainerProps {
  readonly $isInvalid: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ $isInvalid }) => ($isInvalid ? 'var(--red-400)' : 'var(--gray-100)')};
  }

  // declaração de estilo estática
  input,
  textarea {
    border: 1px solid
      ${({ $isInvalid }) => ($isInvalid ? 'var(--red-400)' : 'var(--gray-600)')};
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 0.65rem;

  font-size: 1.125rem;
`;

export const InputContent = styled.input`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  margin-top: 0.65rem;

  display: flex;
  flex-direction: column;

  font-weight: 200;

  color: var(--red-400);
`;
