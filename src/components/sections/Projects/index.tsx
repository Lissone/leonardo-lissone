import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';

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

export function Projects() {
  const { data } = useData();
  const { projectsSection } = data;
  const {
    heading, projects, filterTitleLabel,
    projectsNotfoundLabel, showMoreButtonLabel,
  } = projectsSection;

  const [currentGrid, setCurrentGrid] = useState(GRID_LIMIT);
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [projectCollaboratorsSelected, setProjectCollaboratorsSelected]
    = useState<ProjectContent | null>(null);

  const projectsSliced = currentProjects.slice(0, currentGrid);

  const handleShowMoreProjects = () => {
    setCurrentGrid((grid) => grid + GRID_LIMIT);
  };

  useEffect(() => {
    setProjectCollaboratorsSelected(null);
  }, [data]);

  return (
    <Container id="projects">
      <header data-aos="fade-up">
        <Heading>
          <Subtitle>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
            <h2>{heading[0]}</h2>
          </Subtitle>

          <h1>{heading[1]}</h1>
        </Heading>

        <FilterContainer>
          <span>{filterTitleLabel}:</span>
          <CategoryFilter setCurrentProjects={setCurrentProjects} />
        </FilterContainer>
      </header>

      <Content>
        {projectsSliced.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            handleOpenCollaborationModal={() => setProjectCollaboratorsSelected(project)}
          />
        ))}
      </Content>

      {currentProjects.length === 0 ? (
        <NotFoundText data-aos="fade-up" data-aos-duration="1100">
          {projectsNotfoundLabel}
        </NotFoundText>
      ) : null}

      {currentProjects.length > 0 && currentGrid < currentProjects.length ? (
        <ShowMoreButton
          type="button"
          data-aos="fade-up"
          data-aos-duration="1100"
          onClick={handleShowMoreProjects}
        >
          {showMoreButtonLabel}
          <FiPlusCircle size={22} />
        </ShowMoreButton>
      ) : null}

      <CollaborationModal
        project={projectCollaboratorsSelected}
        isOpen={!!projectCollaboratorsSelected}
        handleClose={() => setProjectCollaboratorsSelected(null)}
      />
    </Container>
  );
}
