import { FiExternalLink, FiMenu } from 'react-icons/fi';

import { HeaderButtons } from '@interfaces/content';

import { Books } from '@components/shared/Icons/Books';
import { Home } from '@components/shared/Icons/Home';
import { Skills } from '@components/shared/Icons/Skills';
import { Suitcase } from '@components/shared/Icons/Suitcase';
import { LanguageSwitch } from '@components/shared/LanguageSwitch';
import { NavLink } from '@components/shared/NavLink';

import {
  Buttons,
  Container,
  Content,
  Hamburguer,
  Menu,
  Navigation,
  ResumeButton,
} from './styles';

interface HeaderProps {
  readonly language: string;
  readonly resumeCv: string;
  readonly resumeButtonLabel: string;
  readonly headerButtons: HeaderButtons;
  readonly toggleContentLanguage: () => void;
  readonly handleHamburguerClick: () => void;
}

export function Header({
  language,
  resumeCv,
  resumeButtonLabel,
  headerButtons,
  handleHamburguerClick,
  toggleContentLanguage,
}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Hamburguer onClick={handleHamburguerClick}>
          <FiMenu size={30} />
        </Hamburguer>

        <Menu>
          <Navigation>
            <NavLink to="presentation" tooltip={headerButtons.presentationButtonTooltip}>
              <Home />
            </NavLink>
            <NavLink to="about" tooltip={headerButtons.aboutButtonTooltip}>
              <Skills />
            </NavLink>
            <NavLink to="work-experiences" tooltip={headerButtons.workExperiencesButtonTooltip}>
              <Suitcase />
            </NavLink>
            <NavLink to="projects" tooltip={headerButtons.projectsButtonTooltip}>
              <Books />
            </NavLink>
          </Navigation>

          <Buttons>
            <LanguageSwitch
              language={language}
              toggleContentLanguage={toggleContentLanguage}
            />

            <ResumeButton href={resumeCv} target="_blank" rel="noopener noreferrer">
              {resumeButtonLabel}
              <FiExternalLink size={22} />
            </ResumeButton>
          </Buttons>
        </Menu>
      </Content>
    </Container>
  );
}
