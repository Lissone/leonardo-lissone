import {
  Container,
  Content,
  Column,
  Heading,
  Text,
  HighlightText,
  SkillsList,
  Cable,
  PhotoContainer
} from './styles'

export function About() {
  const technologies = [
    'Javascript (ES6++)',
    'Typescript',
    'Node.js',
    'React',
    'Vue',
    'Asp.net'
  ]

  return (
    <Container id="about">
      <Content>
        <Column>
          <Heading>
            <img src="/icons/arrow-heading.svg" alt="Seta grande com led" />

            <h1>Sobre mim</h1>
          </Heading>

          <Text>
            <p>
              Atualmente fazendo estágio na área de <strong>desenvolvimento</strong> na{' '}
              <HighlightText>Serget Mobilidade Viária</HighlightText>, atuando
              principalmente na manutenção e desenvolvimento de novas ferramentas, e
              funcionalidades para usuários dos sistemas públicos e privados da empresa.
            </p>

            <p>
              Além de estar muito <strong>determinado</strong> para meu{' '}
              <strong>crescimento pessoal</strong> de conhecimento na área da tecnologia,
              criando projetos sempre inovadores para mim com muito <strong>amor</strong>{' '}
              e <strong>dedicação</strong>.
            </p>

            <p>
              Algumas tecnologias que tenho trabalhado <strong>recentemente</strong>:
            </p>
          </Text>

          <SkillsList>
            {technologies.map(technology => (
              <li key={technology}>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />
                {technology}
              </li>
            ))}
          </SkillsList>
        </Column>

        <Column>
          <PhotoContainer>
            <img src="/images/avatar-border.svg" alt="Borda do avatar" />
            <img src="/photo.png" alt="Foto do Leonardo Lissone" />
          </PhotoContainer>
        </Column>
      </Content>

      <Cable src="/images/cable-about.svg" alt="Cabo de led" />
    </Container>
  )
}
