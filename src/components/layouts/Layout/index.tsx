import { ReactNode, useEffect, useState } from 'react';

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

  useEffect(() => {
    if (windowWidth > 920) {
      setHamburguerIsOpen(false);
      setIsOverlayActive(false);
    }

    setIsMobile(innerWidth <= 920);
  }, [setIsOverlayActive, windowWidth]);

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
