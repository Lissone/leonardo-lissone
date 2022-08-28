// import { FiHelpCircle } from 'react-icons/fi'

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
    projects = content.projects.slice(0, gridLimit)
  }, [gridLimit])

  function handleShowMoreProjects() {
    setGridLimit(state => state + 6)
  }

  return (
    <Container id="projects">
      <header>
        <Heading>
          <h1>{content.heading}</h1>

          {/* <button type="button">
            <FiHelpCircle size={24} />
          </button> */}
        </Heading>
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
