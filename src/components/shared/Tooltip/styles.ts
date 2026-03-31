import { Content } from '@radix-ui/react-tooltip';
import styled from 'styled-components';

// ---------------------------------------------------

export const TooltipContent = styled(Content)`
  padding: 0.375rem 0.875rem;

  font-size: 0.875rem;

  border-radius: 4px;

  z-index: 50;

  color: var(--gray-900);
  background-color: var(--gray-100);

  user-select: none;
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
  will-change: transform, opacity;

  /* ===== Entrada ===== */
  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  /* ===== Saída ===== */
  &[data-state='closed'][data-side='top'] {
    animation-name: slideUpAndHide;
  }
  &[data-state='closed'][data-side='right'] {
    animation-name: slideRightAndHide;
  }
  &[data-state='closed'][data-side='bottom'] {
    animation-name: slideDownAndHide;
  }
  &[data-state='closed'][data-side='left'] {
    animation-name: slideLeftAndHide;
  }

  /* ---------- Entrada ---------- */
  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(6px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-6px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(6px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-6px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  /* ---------- Saída ---------- */
  @keyframes slideUpAndHide {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-4px) scale(0.96);
    }
  }

  @keyframes slideDownAndHide {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(4px) scale(0.96);
    }
  }

  @keyframes slideLeftAndHide {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-4px) scale(0.96);
    }
  }

  @keyframes slideRightAndHide {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(4px) scale(0.96);
    }
  }
`;
