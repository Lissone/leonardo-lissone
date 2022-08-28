import { useState } from 'react'

import { ProjectsContent } from '@interfaces/content'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content, ShowMoreButton } from './styles'

interface ProjectsProps {
  content: ProjectsContent
}

export function Projects({ content }: ProjectsProps) {
  const limitProjectsShow = 6
  const [projects, setProjects] = useState(content.projects.slice(0, limitProjectsShow))

  function handleShowMoreProjects() {
    setProjects(content.projects.slice(0, limitProjectsShow + 6))
  }

  return (
    <Container id="projects">
      <header>
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
