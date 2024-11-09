import { useEffect, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';


import { Job } from '@interfaces/content';

import { useWindowWidth } from '@shared/hooks/useWindowWidth';

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
  const windowWidth = useWindowWidth();

  const [currentExperiencesListItems, setCurrentExperiencesListItems] = useState(1);
  const [aosAnimation, setAosAnimation] = useState<string>();

  const currentExperiences = job.experiences.slice(0, currentExperiencesListItems);
  const showMoreExperiences = currentExperiences < job.experiences;
  const isOddIndex = (index + 1) % 2 === 0;

  useEffect(() => {
    setAosAnimation(windowWidth <= 1560 ? 'fade-up' : undefined);
  }, [windowWidth]);

  return (
    <TimelineItemContainer key={job.company} $side={isOddIndex ? 'left' : 'right'}>
      <Circle
        target="_blank"
        href={job.siteLink}
        $background={job.logo.contrastColor}
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <img src={job.logo.url} alt={`${job.company} Logo`} />
      </Circle>

      <JobCardsList $hasGap={!showMoreExperiences} $side={isOddIndex ? 'left' : 'right'}>
        {currentExperiences.map((experience, i) => (
          <ExperienceCard
            key={experience.role}
            $hasBorderBottom={currentExperiences.length === 1 || i > 0}
            data-aos={aosAnimation || `fade-${isOddIndex ? 'right' : (i > 0 ? 'down' : 'left')}`}
            data-aos-duration={!isOddIndex && i > 0 ? '500' : '1000'}
          >
            <Arrow $side={isOddIndex ? 'left' : (i > 0 ? 'top' : 'right')} />

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
          <ButtonContainer data-aos="fade-down" data-aos-duration="800">
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
