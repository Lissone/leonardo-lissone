import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1560px) {
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const Line = styled.div`
  width: 6px;
  height: 100%;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  
  background: linear-gradient(
    to bottom,
    transparent 0px,
    var(--red-400) 10rem,
    var(--red-400) calc(100% - 10rem),
    transparent 100%
  );

  @media (max-width: 1560px) {
    left: 2.5rem;
  }

  @media (max-width: 680px) {
    width: 4px;

    left: 2rem;
  }
`;

interface TimelineItemContainerProps {
  readonly $side: 'left' | 'right';
}

export const TimelineItemContainer = styled.div<TimelineItemContainerProps>`
  margin-top: 4rem;
  
  width: 100%;
  
  position: relative;
  ${({ $side }) => ($side === 'left' ? 'right: 43.5%;' : 'left: 43.5%;')};

  display: flex;
  flex-direction: ${({ $side }) => ($side === 'left' ? 'row-reverse' : 'row')};
  justify-content: ${({ $side }) => ($side === 'left' ? 'flex-start' : 'flex-end')};
  gap: 2rem;

  @media (max-width: 1560px) {
    right: 43.5%;
    left: 0;

    flex-direction: row;
    justify-content: flex-start;
  }

  @media (max-width: 680px) {
    gap: 1rem;
  }
`;

interface CircleProps {
  readonly $background: string;
}

export const Circle = styled.a<CircleProps>`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  min-height: 5rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid var(--red-400);
  border-radius: 50%;
  box-shadow: 0rem 0rem 1rem var(--red-400);

  background-color: ${({ $background }) => $background};

  transition: 0.3s transform !important;

  img {
    max-width: 3.25rem;
    max-height: 3.25rem;
  }

  &:hover {
    transform: scale(1.05) !important;
  }

  @media (max-width: 680px) {
    width: 4rem;
    height: 4rem;
    min-width: 4rem;
    min-height: 4rem;

    img {
      max-width: 2.25rem;
      max-height: 2.25rem;
    }
  }
`;

interface JobCardsListProps {
  readonly $side: 'left' | 'right';
  readonly $hasGap: boolean;
}

export const JobCardsList = styled.div<JobCardsListProps>`
  max-width: 32rem;

  display: flex;
  flex-direction: column;
  align-items: ${({ $side }) => ($side === 'left' ? 'flex-start' : 'flex-end')};
  ${({ $hasGap }) => ($hasGap ? 'gap: 2rem;' : '')}
  
  @media (max-width: 1560px) {
    max-width: 40rem;

    align-items: flex-start;
  }
`;

interface ExperienceCardProps {
  readonly $hasBorderBottom: boolean;
}

export const ExperienceCard = styled.div<ExperienceCardProps>`
  padding: 1.5rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${({ $hasBorderBottom }) => ($hasBorderBottom ? 'border-bottom: 4px solid var(--red-400);' : '')}
  border-radius: 0.5rem;

  background-color: var(--gray-800);

  @media (max-width: 1560px) {
    padding: 1.25rem;
  }
`;

interface ArrowProps {
  readonly $side: 'left' | 'right' | 'top';
}

export const Arrow = styled.div<ArrowProps>`
  width: 2rem;
  height: 2rem;

  position: absolute;
  top: 1.6rem;
  
  border-style: solid;
  border-width: 1rem;
  border-color: transparent transparent transparent var(--gray-800);

  ${({ $side }) => {
    const mediaQuery = `
      @media (max-width: 1560px) {
        top: 1.6rem;
        left: -1.9rem;
        right: 0;

        transform: rotate(180deg);
      }

      @media (max-width: 680px) {
        top: 1.3rem;
        left: -1.7rem;
      }   
    `;

    switch ($side) {
      case 'top': {
        return `
          top: -1.85rem;
          left: 50%;
          transform: rotate(270deg);
        `;
      }
      case 'left': {
        return `
          right: -2rem;

          ${mediaQuery}
        `;
      }
      case 'right': {
        return `
          left: -2rem;
          transform: rotate(180deg);

          ${mediaQuery}
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
  gap: 0.15rem;
`;

export const CompanyTitle = styled.a`
  width: fit-content;

  font-size: 1.65rem;

  color: var(--red-200);

  transition: 0.3s all;

  &:hover {
    filter: brightness(1.05);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Role = styled.h4`
  font-size: 1.8rem;
`;

export const Period = styled.span`
  margin-top: 0.15rem;

  font-size: 1.15rem;
  font-weight: 600;
`;

export const ActivitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    font-size: 1.2rem;

    display: flex;
    align-items: start;
    gap: 0.5rem;
    
    img {
      margin-top: 0.2rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowMoreExperiencesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-600);
  background: transparent;
  
  svg {
    transition: 0.3s all;
  }

  &:hover {
    svg {
      transform: scale(1.03);
  
      color: var(--red-400);
    }
  }
`;
