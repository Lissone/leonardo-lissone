import { AboutSectionContent } from '@interfaces/content'

import {
  Container,
  Content,
  Column,
  Heading,
  Text,
  SkillsList,
  PhotoContainer
} from './styles'

interface AboutProps {
  readonly content: AboutSectionContent
}

export function About({ content }: AboutProps) {
  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

            <h1>{content.heading}</h1>
          </Heading>

          <Text
            dangerouslySetInnerHTML={{
              __html: content.text
            }}
          />

          <SkillsList>
            {content.recentTechnologies.map(technology => (
              <li key={technology}>
                <img src="/icons/arrow.svg" alt="Red arrow with led" />
                {technology}
              </li>
            ))}
          </SkillsList>
        </Column>

        <Column>
          <PhotoContainer>
            <img src="/images/avatar-border.svg" alt="Avatar border" />
            <img src={content.profilePhoto.url} alt={content.profilePhoto.alt} />
          </PhotoContainer>
        </Column>
      </Content>
    </Container>
  )
}
