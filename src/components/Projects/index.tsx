// import { FiHelpCircle } from 'react-icons/fi'

import { useEffect, useState } from 'react'

import { ProjectsContent } from '@type/content'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content, ShowMoreButton } from './styles'

interface ProjectsProps {
  projectsContent: ProjectsContent
}

export function Projects({ projectsContent }: ProjectsProps) {
  const [gridLimit, setGridLimit] = useState(6)
  let projects = projectsContent.projects.slice(0, gridLimit)

  useEffect(() => {
    projects = projectsContent.projects.slice(0, gridLimit)
  }, [gridLimit])

  function handleShowMoreProjects() {
    setGridLimit(state => state + 6)
  }

  return (
    <Container id="projects">
      <header>
        <Heading>
          <h1>{projectsContent.heading}</h1>

          {/* <button type="button">
            <FiHelpCircle size={24} />
          </button> */}
        </Heading>
      </header>

      <Content>
        {projects.map(project => (
          <ProjectCard key={project.name} projectContent={project} />
        ))}
      </Content>

      {projects.length !== projectsContent.projects.length && (
        <ShowMoreButton
          type="button"
          onClick={handleShowMoreProjects}
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {projectsContent.showMoreButtonLabel}
        </ShowMoreButton>
      )}
    </Container>
  )
}
