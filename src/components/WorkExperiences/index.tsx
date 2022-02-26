import { JobsContent } from '@type/content'

import { Container, Content, Heading, ImageContainer } from './styles'
import { Tabs } from './Tabs'
import { HeadingContentTab, ContentTab, Highlight } from './Tabs/styles'

interface WorkExperiencesProps {
  workExperiencesContent: JobsContent
}

export function WorkExperiences({ workExperiencesContent }: WorkExperiencesProps) {
  return (
    <Container id="work-experiences">
      <Content data-aos="fade-up">
        <Heading>
          <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

          <h1>{workExperiencesContent.heading}</h1>
        </Heading>

        <Tabs>
          {workExperiencesContent.jobs.map(job => (
            <div key={job.company} id={job.company}>
              {job.experiences.map(experience => (
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
                    {experience.activities.map(activity => (
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

      <ImageContainer data-aos="fade-left">
        <img src="/images/prism-cut.svg" alt="Cut prisma with led" />
      </ImageContainer>
    </Container>
  )
}
