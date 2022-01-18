import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Books } from '@components/Icons/Books'
import { Home } from '@components/Icons/Home'
import { Skills } from '@components/Icons/Skills'
import { Suitcase } from '@components/Icons/Suitcase'

import {
  Container,
  Content,
  Navigation,
  Buttons,
  LanguageSwitch,
  ResumeButton,
  MenuLink
} from './styles'

export function Header() {
  const [switchChecked, setSwitchChecked] = useState(false)

  const router = useRouter()

  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Logo" />

        <Navigation>
          <Link href="/">
            <MenuLink to="home" smooth duration={1000} spy exact="true" offset={-80}>
              <Home
                fill={router.pathname === '/' ? 'var(--red-400)' : 'var(--gray-600)'}
              />
            </MenuLink>
          </Link>
          <MenuLink to="skills" smooth duration={1000} spy exact="true" offset={-80}>
            <Skills
              fill={router.pathname === '/skills' ? 'var(--red-400)' : 'var(--gray-600)'}
            />
          </MenuLink>
          <MenuLink to="jobs" smooth duration={1000} spy exact="true" offset={-80}>
            <Suitcase
              fill={router.pathname === '/jobs' ? 'var(--red-400)' : 'var(--gray-600)'}
            />
          </MenuLink>
          <MenuLink to="projects" smooth duration={1000} spy exact="true" offset={-80}>
            <Books
              fill={
                router.pathname === '/projects' ? 'var(--red-400)' : 'var(--gray-600)'
              }
            />
          </MenuLink>
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
