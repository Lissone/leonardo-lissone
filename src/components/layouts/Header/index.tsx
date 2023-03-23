import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { HeaderButtons } from '@interfaces/content'

import { Books } from '@components/shared/Icons/Books'
import { Home } from '@components/shared/Icons/Home'
import { Skills } from '@components/shared/Icons/Skills'
import { Suitcase } from '@components/shared/Icons/Suitcase'

import { NavLink } from './NavLink'
import {
  Container,
  Content,
  Hamburguer,
  Menu,
  Navigation,
  Buttons,
  LanguageSwitch,
  ResumeButton
} from './styles'

interface HeaderProps {
  readonly language: string
  readonly resumeCv: string
  readonly resumeButtonLabel: string
  readonly headerButtons: HeaderButtons
  readonly toggleContentLanguage: () => void
  readonly setIsOverlayActive: (value: boolean) => void
}

export function Header({
  language,
  resumeCv,
  resumeButtonLabel,
  headerButtons,
  toggleContentLanguage,
  setIsOverlayActive
}: HeaderProps) {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)

  const handleHamburguerClick = () => {
    setHamburguerIsOpen(!hamburguerIsOpen)
    setIsOverlayActive(!hamburguerIsOpen)
  }

  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Hamburguer onClick={handleHamburguerClick}>
          <FiMenu size={30} />
        </Hamburguer>

        <Menu isOpen={hamburguerIsOpen}>
          <Navigation>
            <NavLink to="presentation" tooltip={headerButtons.presentationButtonTooltip}>
              <Home />
            </NavLink>
            <NavLink to="about" tooltip={headerButtons.aboutButtonTooltip}>
              <Skills />
            </NavLink>
            <NavLink
              to="work-experiences"
              tooltip={headerButtons.workExperiencesButtonTooltip}
            >
              <Suitcase />
            </NavLink>
            <NavLink to="projects" tooltip={headerButtons.projectsButtonTooltip}>
              <Books />
            </NavLink>
          </Navigation>

          <Buttons>
            <LanguageSwitch
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
                    color: 'var(--gray-300)'
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
                    color: 'var(--gray-500)'
                  }}
                >
                  EN
                </div>
              }
            />

            <ResumeButton href={resumeCv} target="_blank" rel="noopener noreferrer">
              {resumeButtonLabel}
            </ResumeButton>
          </Buttons>
        </Menu>
      </Content>
    </Container>
  )
}

const languageSwitchDefaultStyle = {
  height: '100%',
  fontSize: 18,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
