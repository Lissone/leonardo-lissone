import { useState } from 'react'

import { ProjectsSectionContent } from '@interfaces/content'

import { CategoryFilter } from './CategoryFilter'
import { ProjectCard } from './ProjectCard'
import {
  Container,
  Heading,
  FilterContainer,
  Content,
  ShowMoreButton,
  NotFoundText
} from './styles'

const GRID_LIMIT = 6

interface ProjectsProps {
  readonly content: ProjectsSectionContent
}

export function Projects({ content }: ProjectsProps) {
  const [currentGrid, setCurrentGrid] = useState(GRID_LIMIT)
  const [currentProjects, setCurrentProjects] = useState(content.projects)
  const projectsSliced = currentProjects.slice(0, currentGrid)

  const handleShowMoreProjects = () => {
    setCurrentGrid(grid => grid + GRID_LIMIT)
  }

  return (
    <Container id="projects">
      <header data-aos="fade-up">
        <Heading>{content.heading}</Heading>

        <FilterContainer>
          <span>{content.filterTitleLabel}:</span>
          <CategoryFilter
            projects={content.projects}
            filtersLabels={content.filtersLabels}
            setCurrentProjects={setCurrentProjects}
          />
        </FilterContainer>
      </header>

      <Content>
        {projectsSliced.map(project => (
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

      {currentProjects.length === 0 ? (
        <NotFoundText data-aos="fade-up" data-aos-duration="1100">
          {content.projectsNotfoundLabel}
        </NotFoundText>
      ) : null}

      {currentProjects.length !== 0 && currentGrid < currentProjects.length ? (
        <ShowMoreButton
          type="button"
          data-aos="fade-up"
          data-aos-duration="1100"
          onClick={handleShowMoreProjects}
        >
          {content.showMoreButtonLabel}
        </ShowMoreButton>
      ) : null}
    </Container>
  )
}
