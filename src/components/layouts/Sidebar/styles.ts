import styled from 'styled-components';

interface ContainerProps {
  readonly $show: boolean;
}

export const Container = styled.aside<ContainerProps>`
  width: 18rem;
  height: 100vh;
  padding: 1rem 2rem;
  padding-bottom: 2rem;

  position: fixed;
  z-index: 10;

  top: 0;
  left: 0;
  left: ${({ $show }) => ($show ? '0' : '-18rem')};

  /* opacity: ${({ $show }) => ($show ? '100%' : '0%')}; */

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: var(--gray-800);
  box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 0.25);
  /* transform: translate(-110%, 0); */

  transition: left 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;

export const PhotoContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  img {
    width: 14rem;
    height: 14rem;
  }

  img:nth-child(2) {
    width: 11rem;
    height: 11rem;

    top: 1.4rem;
    position: absolute;

    object-fit: cover;

    border-radius: 100%;
  }
`;

export const LanguageSwitchContainer = styled.div`
  margin-top: 1rem;
  padding: 0 2.75rem;

  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  margin-top: 2.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
`;

export const ResumeButton = styled.a`
  margin-top: auto;
  padding: 0.7rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1.3rem;
  font-weight: 600;

  border: 2px solid var(--red-400);
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 1.25rem var(--red-400);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    color: var(--red-400);
  }
`;
