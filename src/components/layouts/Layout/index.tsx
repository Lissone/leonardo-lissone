import { ReactNode, useEffect, useRef, useState } from 'react';

import { useWindowWidth } from '@shared/hooks/useWindowWidth';

import { Container } from './styles';
import { FixedSocials } from '../FixedSocials';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface LayoutProps {
  readonly setIsOverlayActive: (value: boolean) => void;
  readonly children: ReactNode;
}

export function Layout({ setIsOverlayActive, children }: LayoutProps) {
  const windowWidth = useWindowWidth();

  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false);

  const isMobile = windowWidth <= 920;
  const isMenuOpen = hamburguerIsOpen && isMobile;

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Verifica quando houver click fora do componente Sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setHamburguerIsOpen(false);
        setIsOverlayActive(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, setIsOverlayActive]);

  const handleHamburguerClick = () => {
    const nextOpen = !isMenuOpen;
    setHamburguerIsOpen(nextOpen);
    setIsOverlayActive(nextOpen);
  };

  return (
    <Container>
      <FixedSocials />

      <Header hamburguerIsOpen={isMenuOpen} handleHamburguerClick={handleHamburguerClick} />

      <Sidebar ref={sidebarRef} show={isMenuOpen} />

      {children}
    </Container>
  );
}
