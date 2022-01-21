import { Container, Content, Subtitle, Title, Text, ContactButton } from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <Content>
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
      </Content>

      <img
        src="/images/bearing-led.svg"
        alt="Rolamento com led"
        className="bearing-led"
      />
    </Container>
  )
}
