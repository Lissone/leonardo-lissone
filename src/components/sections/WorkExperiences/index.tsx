import { useData } from '@contexts/DataContext';

import { Timeline } from './Timeline';
import { Container, Content, Heading, Subtitle } from './styles';

export function WorkExperiences() {
  const { data } = useData();
  const { jobsSection } = data;
  const { heading, jobs } = jobsSection;

  return (
    <Container id="work-experiences">
      <Content data-aos="fade-up">
        <Heading>
          <Subtitle>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
            <h2>{heading[0]}</h2>
          </Subtitle>

          <h1>{heading[1]}</h1>
        </Heading>

        <Timeline jobs={jobs} />
      </Content>
    </Container>
  );
}
