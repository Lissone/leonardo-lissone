import { AboutContent } from '@type/content'

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
  aboutContent: AboutContent
}

export function About({ aboutContent }: AboutProps) {
  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

            <h1>{aboutContent.heading}</h1>
          </Heading>

          <Text
            dangerouslySetInnerHTML={{
              __html: aboutContent.text
            }}
          />

          <SkillsList>
            {aboutContent.recentTechnologies.map(technology => (
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
            <img
              src={aboutContent.profilePhoto.url}
              alt={aboutContent.profilePhoto.alt}
            />
          </PhotoContainer>
        </Column>
      </Content>
    </Container>
  )
}
