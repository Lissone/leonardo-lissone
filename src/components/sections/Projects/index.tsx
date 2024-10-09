import { useEffect, useState } from 'react';

import { ProjectContent, ProjectsSectionContent } from '@interfaces/content';

import { CategoryFilter } from './CategoryFilter';
import { CollaborationModal } from './CollaborationModal';
import { ProjectCard } from './ProjectCard';
import {
  Container,
  Content,
  FilterContainer,
  Heading,
  NotFoundText,
  ShowMoreButton,
  Subtitle,
} from './styles';

const GRID_LIMIT = 6;

interface ProjectsProperties {
  readonly content: ProjectsSectionContent;
}

export function Projects({ content }: ProjectsProperties) {
  const [currentGrid, setCurrentGrid] = useState(GRID_LIMIT);
  const [currentProjects, setCurrentProjects] = useState(content.projects);
  const [projectCollaboratorsSelected, setProjectCollaboratorsSelected]
    = useState<ProjectContent | null>(null);
  const projectsSliced = currentProjects.slice(0, currentGrid);

  useEffect(() => {
    setProjectCollaboratorsSelected(null);
  }, [content]);

  const handleShowMoreProjects = () => {
    setCurrentGrid((grid) => grid + GRID_LIMIT);
  };

  return (
    <Container id="projects">
      <header data-aos="fade-up">
        <Heading>
          <Subtitle>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
            <h2>{content.heading[0]}</h2>
          </Subtitle>

          <h1>{content.heading[1]}</h1>
        </Heading>

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
        {projectsSliced.map((project) => (
          <ProjectCard
            key={project.name}
            content={project}
            thumbnailAltLabel={content.thumbnailAltLabel}
            collaborationLabel={content.collaborationLabel}
            prototypeLabel={content.prototypeLabel}
            repositoryLabel={content.repositoryLabel}
            handleOpenCollaborationModal={() => setProjectCollaboratorsSelected(project)}
          />
        ))}
      </Content>

      {currentProjects.length === 0 ? (
        <NotFoundText data-aos="fade-up" data-aos-duration="1100">
          {content.projectsNotfoundLabel}
        </NotFoundText>
      ) : null}

      {currentProjects.length > 0 && currentGrid < currentProjects.length ? (
        <ShowMoreButton
          type="button"
          data-aos="fade-up"
          data-aos-duration="1100"
          onClick={handleShowMoreProjects}
        >
          {content.showMoreButtonLabel}
        </ShowMoreButton>
      ) : null}

      <CollaborationModal
        project={projectCollaboratorsSelected}
        title={content.collaborationModalTitle}
        text={content.collaborationModalText}
        isOpen={!!projectCollaboratorsSelected}
        handleClose={() => setProjectCollaboratorsSelected(null)}
      />
    </Container>
  );
}
