import { useEffect, useState } from 'react'

import { ProjectsContent } from '@interfaces/content'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content, ShowMoreButton } from './styles'

interface ProjectsProps {
  content: ProjectsContent
}

export function Projects({ content }: ProjectsProps) {
  const [gridLimit, setGridLimit] = useState(6)
  let projects = content.projects.slice(0, gridLimit)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    projects = content.projects.slice(0, gridLimit)
  }, [gridLimit])

  function handleShowMoreProjects() {
    setGridLimit(state => state + 6)
  }

  return (
    <Container id="projects">
      <header data-aos="fade-up">
        <Heading>{content.heading}</Heading>
      </header>

      <Content>
        {projects.map(project => (
          <ProjectCard key={project.name} content={project} />
        ))}
      </Content>

      {projects.length !== content.projects.length && (
        <ShowMoreButton
          type="button"
          onClick={handleShowMoreProjects}
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {content.showMoreButtonLabel}
        </ShowMoreButton>
      )}
    </Container>
  )
}
