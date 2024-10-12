import { ReactNode, useEffect, useState } from 'react';

import { ContentLanguage } from '@interfaces/content';

import { SendMessageModalProvider } from '@contexts/SendMessageModalContext';

import { contentLanguages } from '@shared/db';

import { Container } from './styles';
import { FixedSocials } from '../FixedSocials';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface LayoutProps {
  readonly setIsOverlayActive: (value: boolean) => void;
  readonly children: (content: ContentLanguage) => ReactNode;
}

export function Layout({ setIsOverlayActive, children }: LayoutProps) {
  // ! TODO: criar contexto para conteúdo
  const [content, setContent] = useState(contentLanguages['en-us']);

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

  const toggleContentLanguage = () => {
    setContent(content.lang === 'pt-br' ? contentLanguages['en-us'] : contentLanguages['pt-br']);
  };

  return (
    <SendMessageModalProvider content={content.contactSection.sendMessageModalContent}>
      <Container>
        <FixedSocials socials={content.socials} />

        <Header
          language={content.lang}
          resumeCv={content.sharedButtons.resumeCv}
          resumeButtonLabel={content.sharedButtons.resumeButtonLabel}
          headerButtons={content.headerButtons}
          toggleContentLanguage={toggleContentLanguage}
          handleHamburguerClick={handleHamburguerClick}
        />

        <Sidebar
          show={isMobile && hamburguerIsOpen}
          language={content.lang}
          resumeCv={content.sharedButtons.resumeCv}
          resumeButtonLabel={content.sharedButtons.resumeButtonLabel}
          headerButtons={content.headerButtons}
          profilePhoto={content.aboutSection.profilePhoto}
          toggleContentLanguage={toggleContentLanguage}
        />

        {children(content)}
      </Container>
    </SendMessageModalProvider>
  );
}
