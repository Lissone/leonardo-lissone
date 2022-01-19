import { BsInstagram } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { Container, Content } from './styles'

export function FixedSocials() {
  return (
    <Container>
      <Content>
        <a href="https://github.com/Lissone" target="_blank" rel="noreferrer">
          <FiGithub size={30} />
        </a>

        <a href="https://www.linkedin.com/in/lissone/" target="_blank" rel="noreferrer">
          <FiLinkedin size={30} />
        </a>

        <a href="https://www.instagram.com/Lissonez/" target="_blank" rel="noreferrer">
          <BsInstagram size={29} />
        </a>

        <img src="/images/cable-fixed-socials.svg" alt="Cabo de led" />
      </Content>
    </Container>
  )
}
