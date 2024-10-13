import { useData } from '@contexts/DataContext';

import { Tabs } from './Tabs';
import { ContentTab, HeadingContentTab, Highlight } from './Tabs/styles';
import { Container, Content, Heading, ImageContainer, Subtitle } from './styles';

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

        <Tabs>
          {jobs.map((job) => (
            <div key={job.company} id={job.company}>
              {job.experiences.map((experience) => (
                <ContentTab key={experience.role}>
                  <HeadingContentTab>
                    <h1>
                      {experience.role}{' '}
                      <Highlight
                        href={experience.siteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @{job.company}
                      </Highlight>
                    </h1>

                    <span>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </HeadingContentTab>

                  <ul>
                    {experience.activities.map((activity) => (
                      <li key={activity}>
                        <img src="/icons/arrow.svg" alt="Red arrow with led" />

                        <p>{activity}</p>
                      </li>
                    ))}
                  </ul>
                </ContentTab>
              ))}
            </div>
          ))}
        </Tabs>
      </Content>

      <ImageContainer>
        <img src="/images/prism-cut.svg" alt="Cut prisma with led" />
      </ImageContainer>
    </Container>
  );
}
