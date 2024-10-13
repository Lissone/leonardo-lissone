import { useData } from '@contexts/DataContext';

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

export function About() {
  const { data } = useData();
  const { aboutSection } = data;
  const { heading, text, recentTechnologies, profilePhoto } = aboutSection;

  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <Subtitle>
              <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
              <h2>{heading[0]}</h2>
            </Subtitle>

            <h1>{heading[1]}</h1>
          </Heading>

          <Text
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />

          <SkillsList>
            {recentTechnologies.map((technology) => (
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
            <img src={profilePhoto.url} alt={profilePhoto.alt} />
          </PhotoContainer>
        </Column>
      </Content>
    </Container>
  );
}
