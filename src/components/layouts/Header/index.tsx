import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { HeaderButtons } from '@interfaces/content';

import { Books } from '@components/shared/Icons/Books';
import { Home } from '@components/shared/Icons/Home';
import { Skills } from '@components/shared/Icons/Skills';
import { Suitcase } from '@components/shared/Icons/Suitcase';

import { NavLink } from './NavLink';
import {
  Buttons,
  Container,
  Content,
  Hamburguer,
  LanguageMobileSwitchContainer,
  LanguageSwitchContainer,
  Menu,
  NavLinkTitle,
  Navigation,
  PhotoContainer,
  ResumeButton,
} from './styles';

interface HeaderProps {
  readonly language: string;
  readonly resumeCv: string;
  readonly resumeButtonLabel: string;
  readonly headerButtons: HeaderButtons;
  readonly profilePhoto: {
    readonly url: string;
    readonly alt: string;
  };
  readonly toggleContentLanguage: () => void;
  readonly setIsOverlayActive: (value: boolean) => void;
}

export function Header({
  language,
  resumeCv,
  resumeButtonLabel,
  headerButtons,
  profilePhoto,
  toggleContentLanguage,
  setIsOverlayActive,
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false);

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
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Hamburguer onClick={handleHamburguerClick}>
          <FiMenu size={30} />
        </Hamburguer>

        <Menu $isOpen={hamburguerIsOpen}>
          {isMobile ? (
            <PhotoContainer>
              <img src="/images/avatar-border.svg" alt="Avatar border" />
              <img src={profilePhoto.url} alt={profilePhoto.alt} />
            </PhotoContainer>
          ) : null}

          {isMobile ? (
            <LanguageMobileSwitchContainer>
              <LanguageSwitch
                language={language}
                toggleContentLanguage={toggleContentLanguage}
              />
            </LanguageMobileSwitchContainer>
          ) : null}

          <Navigation>
            <NavLink
              to="presentation"
              showTooltip={!isMobile}
              tooltip={headerButtons.presentationButtonTooltip}
            >
              <Home />
              {isMobile ? <NavLinkTitle>{headerButtons.presentationButtonTooltip}</NavLinkTitle> : null}
            </NavLink>
            <NavLink
              to="about"
              showTooltip={!isMobile}
              tooltip={headerButtons.aboutButtonTooltip}
            >
              <Skills />
              {isMobile ? <NavLinkTitle>{headerButtons.aboutButtonTooltip}</NavLinkTitle> : null}
            </NavLink>
            <NavLink
              to="work-experiences"
              showTooltip={!isMobile}
              tooltip={headerButtons.workExperiencesButtonTooltip}
            >
              <Suitcase />
              {isMobile ? <NavLinkTitle>{headerButtons.workExperiencesButtonTooltip}</NavLinkTitle> : null}
            </NavLink>
            <NavLink
              to="projects"
              showTooltip={!isMobile}
              tooltip={headerButtons.projectsButtonTooltip}
            >
              <Books />
              {isMobile ? <NavLinkTitle>{headerButtons.projectsButtonTooltip}</NavLinkTitle> : null}
            </NavLink>
          </Navigation>

          <Buttons>
            {isMobile ? null : (
              <LanguageSwitch
                language={language}
                toggleContentLanguage={toggleContentLanguage}
              />
            )}

            <ResumeButton href={resumeCv} target="_blank" rel="noopener noreferrer">
              {resumeButtonLabel}
            </ResumeButton>
          </Buttons>
        </Menu>
      </Content>
    </Container>
  );
}

interface LanguageSwitchProps {
  readonly language: string;
  readonly toggleContentLanguage: () => void;
}

function LanguageSwitch({ language, toggleContentLanguage }: LanguageSwitchProps) {
  return (
    <LanguageSwitchContainer
      checked={language === 'en-us'}
      onChange={toggleContentLanguage}
      handleDiameter={26}
      width={100}
      height={40}
      borderRadius={40}
      offColor="#313131"
      onColor="#313131"
      onHandleColor="#CA3E47"
      offHandleColor="#CA3E47"
      boxShadow="0rem 0rem 0.625rem #CA3E47"
      activeBoxShadow="0rem 0rem 0.625rem #CA3E47"
      uncheckedIcon={
        <div
          style={{
            ...languageSwitchDefaultStyle,
            paddingRight: 14,
            color: 'var(--gray-300)',
          }}
        >
          BR
        </div>
      }
      checkedIcon={
        <div
          style={{
            ...languageSwitchDefaultStyle,
            paddingLeft: 14,
            color: 'var(--gray-500)',
          }}
        >
          EN
        </div>
      }
    />
  );
}

const languageSwitchDefaultStyle = {
  height: '100%',
  fontSize: 18,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
