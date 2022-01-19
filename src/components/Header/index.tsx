import { useState } from 'react'

import { Books } from '@components/Icons/Books'
import { Home } from '@components/Icons/Home'
import { Skills } from '@components/Icons/Skills'
import { Suitcase } from '@components/Icons/Suitcase'

import { NavLink } from './NavLink'
import {
  Container,
  Content,
  Navigation,
  Buttons,
  LanguageSwitch,
  ResumeButton
} from './styles'

export function Header() {
  const [switchChecked, setSwitchChecked] = useState(false)

  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Navigation>
          <NavLink to="presentation">
            <Home />
          </NavLink>
          <NavLink to="about">
            <Skills />
          </NavLink>
          <NavLink to="jobs">
            <Suitcase />
          </NavLink>
          <NavLink to="projects">
            <Books />
          </NavLink>
        </Navigation>

        <Buttons>
          <LanguageSwitch
            checked={switchChecked}
            onChange={setSwitchChecked}
            handleDiameter={26}
            width={100}
            height={40}
            borderRadius={40}
            offColor="#313131"
            onColor="#313131"
            onHandleColor="#CA3E47"
            offHandleColor="#CA3E47"
            boxShadow="0px 0px 10px #CA3E47"
            activeBoxShadow="0px 0px 10px #CA3E47"
            uncheckedIcon={
              <div
                style={{
                  height: '100%',
                  fontSize: 18,
                  fontWeight: 700,
                  paddingRight: 14,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--gray-300)'
                }}
              >
                BR
              </div>
            }
            checkedIcon={
              <div
                style={{
                  height: '100%',
                  fontSize: 18,
                  fontWeight: 700,
                  paddingLeft: 14,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--gray-500)'
                }}
              >
                EN
              </div>
            }
          />

          <ResumeButton type="button">Resumo</ResumeButton>
        </Buttons>
      </Content>
    </Container>
  )
}
