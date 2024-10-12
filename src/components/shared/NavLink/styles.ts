import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';

export const MenuLink = styled(Scroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: none;

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.12);
  }

  svg {
    path {
      fill: var(--gray-600);
    }
  }

  &.active {
    svg {
      path {
        fill: var(--red-400);
      }
    }
  }
`;

export const Label = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;
