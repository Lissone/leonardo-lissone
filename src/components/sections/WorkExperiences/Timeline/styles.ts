import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  width: 6px;
  height: 105%;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  /* box-shadow: 0rem 0rem 0.5rem var(--red-400); */
  
  background: linear-gradient(
    to bottom,
    transparent 0%, 
    var(--red-400) 15%,
    var(--red-400) 80%, 
    var(--red-400) 90%, 
    transparent 95%
  );
`;

export const TimelineItem = styled.div<{ $side: 'left' | 'right'; }>`
  margin-top: 4rem;
  ${({ $side }) => ($side === 'left' ? 'margin-right: 67.5rem;' : 'margin-left: 12.5rem;')};
  
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: ${({ $side }) => ($side === 'left' ? 'row-reverse' : 'row')};
  justify-content: ${({ $side }) => ($side === 'left' ? 'flex-start' : 'flex-end')};
  gap: 2rem;
`;

export const Circle = styled.div`
  width: 4.5rem;
  height: 4.5rem;

  z-index: 1;

  border: 4px solid var(--red-400);
  border-radius: 50%;
  box-shadow: 0rem 0rem 0.5rem var(--red-400);

  background-color: var(--gray-300);
`;

export const JobCardsList = styled.div<{ $side: 'left' | 'right'; }>`
  max-width: 38rem;

  display: flex;
  flex-direction: column;
  align-items: ${({ $side }) => ($side === 'left' ? 'flex-start' : 'flex-end')};
  gap: 2.5rem;
`;

interface ExperienceCardProps {
  readonly $hasBorderBottom: boolean;
}

export const ExperienceCard = styled.div<ExperienceCardProps>`
  padding: 1.5rem;

  position: relative;

  ${({ $hasBorderBottom }) => ($hasBorderBottom ? 'border-bottom: 4px solid var(--red-400);' : '')}
  border-radius: 0.5rem;

  background-color: var(--gray-800);
`;

interface ArrowProps {
  readonly $side: 'left' | 'right' | 'top';
}

export const Arrow = styled.div<ArrowProps>`
  width: 2rem;
  height: 2rem;

  position: absolute;
  top: 1.5rem;
  
  border-style: solid;
  border-width: 1rem;
  border-color: transparent transparent transparent var(--gray-800);

  ${({ $side }) => {
    switch ($side) {
      case 'top': {
        return `
          top: -2rem;
          left: 50%;
          transform: rotate(270deg);
        `;
      }
      case 'left': {
        return 'right: -2rem;';
      }
      case 'right': {
        return `
          left: -2rem;
          transform: rotate(180deg);
        `;
      }
      default: {
        return '';
      }
    }
  }}
`;


export const ExperienceHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyTitle = styled.a`
  font-size: 2rem;

  color: var(--red-200);

  transition: 0.3s all;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Role = styled.h4`
  font-size: 2rem;
`;

export const Period = styled.span`
  margin-top: 0.25rem;

  font-size: 1.4rem;
`;

export const ActivitiesList = styled.ul`
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
`;
