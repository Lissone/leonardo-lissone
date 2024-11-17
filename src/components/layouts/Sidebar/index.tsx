import { forwardRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { useData } from '@contexts/DataContext';

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
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ show }, ref) => {
  const { data } = useData();
  const { headerButtons, aboutSection, sharedButtons } = data;

  return (
    <Container ref={ref} $show={show}>
      <PhotoContainer>
        <img src="/images/avatar-border.svg" alt="Avatar border" />
        <img src={aboutSection.profilePhoto.url} alt={aboutSection.profilePhoto.alt} />
      </PhotoContainer>

      <LanguageSwitchContainer>
        <LanguageSwitch />
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

      <ResumeButton href={sharedButtons.resumeCv} target="_blank" rel="noopener noreferrer">
        {sharedButtons.resumeButtonLabel}
        <FiExternalLink size={22} />
      </ResumeButton>
    </Container>
  );
});

Sidebar.displayName = 'Sidebar';
