import {
  ActivitiesList, Arrow, Circle, CompanyTitle,
  Container, Content, ExperienceCard, ExperienceHeading, JobCardsList,
  Line, Period, Role, TimelineItem,
} from './styles';

interface TimelineProps {
  readonly jobs: {
    readonly company: string;
    readonly experiences: {
      readonly siteLink: string;
      readonly role: string;
      readonly startDate: string;
      readonly endDate: string;
      readonly activities: string[];
    }[];
  }[];
}

export function Timeline({ jobs }: TimelineProps) {
  return (
    <Container>
      <Line />

      <Content>
        {jobs.map((job, index) => {
        // ! const [showAllJobExp, setShowAllJobExp] = useState();
          return (
            <TimelineItem key={job.company} $side={(index + 1) % 2 === 0 ? 'left' : 'right'}>
              <Circle />

              <JobCardsList $side={(index + 1) % 2 === 0 ? 'left' : 'right'}>
                {job.experiences.map((experience, i) => (
                  <ExperienceCard key={experience.role} $hasBorderBottom={job.experiences.length === 1 || i > 0}>
                    <Arrow $side={(index + 1) % 2 === 0 ? 'left' : (i > 0 ? 'top' : 'right')} />

                    <ExperienceHeading>
                      <CompanyTitle href={experience.siteLink}>{job.company}</CompanyTitle>
                      <Role>{experience.role}</Role>
                      <Period>{experience.startDate} - {experience.endDate}</Period>
                    </ExperienceHeading>

                    <ActivitiesList>
                      {experience.activities.map((activity) => (
                        <li key={activity}>
                          <img src="/icons/arrow.svg" alt="Arrow" />
                          <p>{activity}</p>
                        </li>
                      ))}
                    </ActivitiesList>
                  </ExperienceCard>
                ))}
              </JobCardsList>
            </TimelineItem>
          );
        })}
      </Content>
    </Container>
  );
}
