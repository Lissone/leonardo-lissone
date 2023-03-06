import { useEffect, useState } from 'react'

import { ProjectsSectionContent } from '@interfaces/content'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content, ShowMoreButton } from './styles'

const GRID_LIMIT = 6

interface ProjectsProps {
  readonly content: ProjectsSectionContent
}

export function Projects({ content }: ProjectsProps) {
  const [gridLimit, setGridLimit] = useState(GRID_LIMIT)
  let projects = content.projects.slice(0, gridLimit)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    projects = content.projects.slice(0, gridLimit)
  }, [gridLimit])

  const handleShowMoreProjects = () => {
    setGridLimit(state => state + GRID_LIMIT)
  }

  return (
    <Container id="projects">
      <header data-aos="fade-up">
        <Heading>{content.heading}</Heading>
      </header>

      <Content>
        {projects.map(project => (
          <ProjectCard
            key={project.name}
            content={project}
            thumbnailAltLabel={content.thumbnailAltLabel}
            collaborationLabel={content.collaborationLabel}
            prototypeLabel={content.prototypeLabel}
            repositoryLabel={content.repositoryLabel}
          />
        ))}
      </Content>

      {projects.length !== content.projects.length ? (
        <ShowMoreButton
          type="button"
          onClick={handleShowMoreProjects}
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {content.showMoreButtonLabel}
        </ShowMoreButton>
      ) : null}
    </Container>
  )
}
