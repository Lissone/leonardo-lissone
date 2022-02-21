import { BsInstagram } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import {
  Container,
  Content,
  Subtitle,
  Title,
  Text,
  ContactButton,
  Socials
} from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <Content data-aos="fade-up">
        <Subtitle>
          <img src="/icons/arrow-heading.svg" alt="Seta grande com led" />

          <h2>O que fazer agora?</h2>
        </Subtitle>

        <Title>Faça contato comigo</Title>

        <Text>
          Platform that allows you to create quiz rooms, for people to ask questions and
          the owner of the room to answer, like or highlight specific questions.
        </Text>

        <ContactButton
          href="mailto:leonardo.lissonez@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contactar agora
        </ContactButton>

        <Socials>
          <a href="https://github.com/Lissone" target="_blank" rel="noreferrer">
            <FiGithub size={30} />
          </a>

          <a href="https://www.linkedin.com/in/lissone/" target="_blank" rel="noreferrer">
            <FiLinkedin size={30} />
          </a>

          <a href="https://www.instagram.com/Lissonez/" target="_blank" rel="noreferrer">
            <BsInstagram size={29} />
          </a>
        </Socials>
      </Content>

      <img
        src="/images/bearing-led.svg"
        alt="Rolamento com led"
        className="bearing-led"
      />
    </Container>
  )
}
