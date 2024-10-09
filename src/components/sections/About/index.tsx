import { AboutSectionContent } from '@interfaces/content';

import {
  Column,
  Container,
  Content,
  Heading,
  PhotoContainer,
  SkillsList,
  Subtitle,
  Text,
} from './styles';

interface AboutProps {
  readonly content: AboutSectionContent;
}

export function About({ content }: AboutProps) {
  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <Subtitle>
              <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
              <h2>{content.heading[0]}</h2>
            </Subtitle>

            <h1>{content.heading[1]}</h1>
          </Heading>

          <Text
            dangerouslySetInnerHTML={{
              __html: content.text,
            }}
          />

          <SkillsList>
            {content.recentTechnologies.map((technology) => (
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
  );
}
