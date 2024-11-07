import { FiExternalLink, FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { useData } from '@contexts/DataContext';

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
  readonly hamburguerIsOpen: boolean;
  readonly handleHamburguerClick: () => void;
}

export function Header({
  hamburguerIsOpen, handleHamburguerClick,
}: HeaderProps) {
  const { data } = useData();
  const { headerButtons, sharedButtons } = data;

  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Hamburguer onClick={handleHamburguerClick}>
          {hamburguerIsOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
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
            <LanguageSwitch />

            <ResumeButton href={sharedButtons.resumeCv} target="_blank" rel="noopener noreferrer">
              {sharedButtons.resumeButtonLabel}
              <FiExternalLink size={22} />
            </ResumeButton>
          </Buttons>
        </Menu>
      </Content>
    </Container>
  );
}
