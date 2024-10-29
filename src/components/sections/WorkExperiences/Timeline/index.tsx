import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';


import { Job } from '@interfaces/content';

import {
  ActivitiesList, Arrow, ButtonContainer, Circle, CompanyTitle,
  Container, Content, ExperienceCard, ExperienceHeading, JobCardsList,
  Line, Period, Role, ShowMoreExperiencesButton, TimelineItemContainer,
} from './styles';

interface TimelineProps {
  readonly jobs: Job[];
}

export function Timeline({ jobs }: TimelineProps) {
  return (
    <Container>
      <Line />

      <Content>
        {jobs.map((job, index) => (
          <TimelineItem key={job.company} index={index} job={job} />
        ))}
      </Content>
    </Container>
  );
}

interface TimelineItemProps {
  readonly index: number;
  readonly job: Job;
}

function TimelineItem({ job, index }: TimelineItemProps) {
  const [currentExperiencesListItems, setCurrentExperiencesListItems] = useState(1);

  const currentExperiences = job.experiences.slice(0, currentExperiencesListItems);
  const showMoreExperiences = currentExperiences < job.experiences;

  return (
    <TimelineItemContainer key={job.company} $side={(index + 1) % 2 === 0 ? 'left' : 'right'}>
      <Circle target="_blank" href={job.siteLink} $background={job.logo.contrastColor}>
        <img src={job.logo.url} alt={`${job.company} Logo`} />
      </Circle>

      <JobCardsList $hasGap={!showMoreExperiences} $side={(index + 1) % 2 === 0 ? 'left' : 'right'}>
        {currentExperiences.map((experience, i) => (
          // ! TODO: adicionar animação
          <ExperienceCard
            key={experience.role}
            $hasBorderBottom={currentExperiences.length === 1 || i > 0}
          >
            <Arrow $side={(index + 1) % 2 === 0 ? 'left' : (i > 0 ? 'top' : 'right')} />

            <ExperienceHeading>
              <CompanyTitle target="_blank" href={job.siteLink}>
                {job.company}
              </CompanyTitle>
              <Role>{experience.role}</Role>
            </ExperienceHeading>

            <ActivitiesList>
              {experience.activities.map((activity) => (
                <li key={activity}>
                  <img src="/icons/arrow.svg" alt="Arrow" />
                  <p>{activity}</p>
                </li>
              ))}
            </ActivitiesList>

            <Period>{experience.startDate} - {experience.endDate}</Period>
          </ExperienceCard>
        ))}

        {showMoreExperiences ? (
          <ButtonContainer>
            <ShowMoreExperiencesButton
              type="button"
              onClick={() => setCurrentExperiencesListItems((prevState) => prevState + 1)}
            >
              <TiArrowSortedDown size={64} />
            </ShowMoreExperiencesButton>
          </ButtonContainer>
        ) : null}
      </JobCardsList>
    </TimelineItemContainer>
  );
}
