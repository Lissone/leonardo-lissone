import { FiExternalLink } from 'react-icons/fi';

import { HeaderButtons } from '@interfaces/content';

import { Books } from '@components/shared/Icons/Books';
import { Home } from '@components/shared/Icons/Home';
import { Skills } from '@components/shared/Icons/Skills';
import { Suitcase } from '@components/shared/Icons/Suitcase';
import { LanguageSwitch } from '@components/shared/LanguageSwitch';
import { NavLink } from '@components/shared/NavLink';

import {
  Container,
  LanguageSwitchContainer,
  Navigation,
  PhotoContainer,
  ResumeButton,
} from './styles';

interface SidebarProps {
  readonly show: boolean;
  readonly language: string;
  readonly resumeCv: string;
  readonly resumeButtonLabel: string;
  readonly headerButtons: HeaderButtons;
  readonly profilePhoto: {
    readonly url: string;
    readonly alt: string;
  };
  readonly toggleContentLanguage: () => void;
}

export function Sidebar({
  show = false,
  language,
  resumeCv,
  resumeButtonLabel,
  headerButtons,
  profilePhoto,
  toggleContentLanguage,
}: SidebarProps) {
  return (
    <Container $show={show}>
      <PhotoContainer>
        <img src="/images/avatar-border.svg" alt="Avatar border" />
        <img src={profilePhoto.url} alt={profilePhoto.alt} />
      </PhotoContainer>

      <LanguageSwitchContainer>
        <LanguageSwitch
          language={language}
          toggleContentLanguage={toggleContentLanguage}
        />
      </LanguageSwitchContainer>

      <Navigation>
        <NavLink to="presentation" tooltip={headerButtons.presentationButtonTooltip} hasLabel>
          <Home />
        </NavLink>
        <NavLink to="about" tooltip={headerButtons.aboutButtonTooltip} hasLabel>
          <Skills />
        </NavLink>
        <NavLink to="work-experiences" tooltip={headerButtons.workExperiencesButtonTooltip} hasLabel>
          <Suitcase />
        </NavLink>
        <NavLink to="projects" tooltip={headerButtons.projectsButtonTooltip} hasLabel>
          <Books />
        </NavLink>
      </Navigation>

      <ResumeButton href={resumeCv} target="_blank" rel="noopener noreferrer">
        {resumeButtonLabel}
        <FiExternalLink size={22} />
      </ResumeButton>
    </Container>
  );
}
