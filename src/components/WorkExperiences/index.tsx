import { JobsContent } from '@types/content'

import { Container, Content, Heading, ImageContainer } from './styles'
import { Tabs } from './Tabs'
import { HeadingContentTab, Highlight } from './Tabs/styles'

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
              <HeadingContentTab>
                <h1>
                  {job.role}{' '}
                  <Highlight href={job.siteLink} target="_blank" rel="noreferrer">
                    {job.company}
                  </Highlight>
                </h1>

                <span>
                  {job.startDate} - {job.endDate}
                </span>
              </HeadingContentTab>

              <ul>
                {job.activities.map(activity => (
                  <li key={activity}>
                    <img src="/icons/arrow.svg" alt="Red arrow with led" />

                    <p>{activity}</p>
                  </li>
                ))}
              </ul>
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
