import { ReactNode, useEffect, useState } from 'react';

import { Container } from './styles';
import { FixedSocials } from '../FixedSocials';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface LayoutProps {
  readonly setIsOverlayActive: (value: boolean) => void;
  readonly children: ReactNode;
}

export function Layout({ setIsOverlayActive, children }: LayoutProps) {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth > 920) {
        setHamburguerIsOpen(false);
        setIsOverlayActive(false);
      }

      setIsMobile(innerWidth <= 920);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOverlayActive]);

  const handleHamburguerClick = () => {
    setHamburguerIsOpen(!hamburguerIsOpen);
    setIsOverlayActive(!hamburguerIsOpen);
  };

  return (
    <Container>
      <FixedSocials />

      <Header handleHamburguerClick={handleHamburguerClick} />

      <Sidebar show={isMobile && hamburguerIsOpen} />

      {children}
    </Container>
  );
}
