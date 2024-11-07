import styled from 'styled-components';

export const Container = styled.div`
  max-width: 24rem;
  min-height: 30rem;

  border: 1px solid var(--gray-800);
  border-radius: 0.35rem;

  background: var(--gray-900-opacity-80);

  transition: border-color 0.3s, box-shadow 0.3s !important;

  &:hover {
    border-color: var(--red-400);
    box-shadow: 0rem 0rem 1rem var(--red-400);
  }

  &:hover .project-card-actions {
    opacity: 1;
  }
`;

export const Content = styled.div`
  height: 100%;
  
  padding: 0.875rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

interface CoverProps {
  readonly $imageUrl: string;
}

export const Cover = styled.div<CoverProps>`
  width: 100%;
  height: 12.25rem;

  position: relative;
  overflow: hidden;

  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 0.35rem;

  @media (max-width: 320px) {
    height: 11rem;
  }
`;

export const CoverActions = styled.div`
  opacity: 0;

  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 0.35rem;

  background-color: rgba(0, 0, 0, 0.6);

  transition: 0.3s opacity;

  a {
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    border: 1px solid var(--gray-900);

    background: var(--gray-900);

    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
      border-color: var(--red-400);
      box-shadow: 0rem 0rem 1rem var(--red-400);
    }
    
    svg {
      color: var(--red-400);
    }
  }
`;

export const Information = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  button {
    background: transparent;
  }
`;

export const Divider = styled.div`
  width: 4.5rem;
  height: 1px;
  margin-top: 0.65rem;
  margin-bottom: 1rem;

  border-radius: 100%;

  background: var(--gray-800);
`;

export const TechnologiesRow = styled.div`
  width: 100%;
  margin-top: 0.65rem;

  display: flex;
  align-items: center;

  overflow-wrap: break-word;

  span {
    font-size: 0.875rem;

    color: var(--red-200);
  }
`;

export const SeparateRow = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.8rem;
  }
`;
