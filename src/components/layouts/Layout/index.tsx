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
  const [isMobile, setIsMobile] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (windowWidth > 920) {
      setHamburguerIsOpen(false);
      setIsOverlayActive(false);
    }

    setIsMobile(innerWidth <= 920);
  }, [setIsOverlayActive, windowWidth]);

  // Verifica quando houver click fora do componente Sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setHamburguerIsOpen(false);
        setIsOverlayActive(false);
      }
    };

    if (hamburguerIsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hamburguerIsOpen, setIsOverlayActive]);

  const handleHamburguerClick = () => {
    setHamburguerIsOpen(!hamburguerIsOpen);
    setIsOverlayActive(!hamburguerIsOpen);
  };

  return (
    <Container>
      <FixedSocials />

      <Header hamburguerIsOpen={hamburguerIsOpen} handleHamburguerClick={handleHamburguerClick} />

      <Sidebar ref={sidebarRef} show={isMobile && hamburguerIsOpen} />

      {children}
    </Container>
  );
}
