import {
  Container,
  ImageContainer,
  Content,
  Heading,
  ResumeText,
  HighlightText,
  ContactButton
} from './styles'

export function Presentation() {
  return (
    <Container id="presentation">
      <Content data-aos="fade-right">
        <Heading>
          <h3>Olá,</h3>
          <h2>Eu sou</h2>
          <h1>Leonardo Lissone</h1>
        </Heading>

        <ResumeText>
          <p>
            Atualmente fazendo estágio na área de <strong>desenvolvimento</strong> na{' '}
            <HighlightText>Serget Mobilidade Viária</HighlightText>, atuando
            principalmente na manutenção e desenvolvimento de novas ferramentas, e
            funcionalidades para usuários dos sistemas públicos e privados da empresa.
          </p>

          <p>
            Além de estar muito <strong>determinado</strong> para meu{' '}
            <strong>crescimento pessoal</strong> de conhecimento na área da tecnologia,
            criando projetos sempre inovadores para mim com muito <strong>amor</strong> e{' '}
            <strong>dedicação</strong>.
          </p>
        </ResumeText>

        <ContactButton to="contact" smooth duration={1000} spy exact="true" offset={-80}>
          Contactar agora
        </ContactButton>
      </Content>

      <ImageContainer>
        <img src="/images/bearing-led.svg" alt="Rolamento com led" />
      </ImageContainer>
    </Container>
  )
}
