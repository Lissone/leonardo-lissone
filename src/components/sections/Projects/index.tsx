import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';
import { ProjectsFilterProvider, useProjectsFilter } from '@contexts/ProjectsFilterContext';

import { Tooltip } from '@components/shared/Tooltip';

import { CategoryFilterModal } from './CategoryFilterModal';
import { CollaborationModal } from './CollaborationModal';
import { ProjectCard } from './ProjectCard';
import {
  Container,
  Content,
  FilterBadge,
  FilterButton,
  FilterContainer,
  Header,
  Heading,
  NotFoundText,
  ProjectsList,
  Row,
  SearchInputContainer,
  ShowMoreButton,
} from './styles';

const GRID_LIMIT = 6;

export function Projects() {
  const { data } = useData();
  const { projectsSection } = data;
  const {
    heading, filterNameTitleLabel, filterCategoryTooltipLabel,
    projects, projectsNotfoundLabel, showMoreButtonLabel,
  } = projectsSection;

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentGrid, setCurrentGrid] = useState(GRID_LIMIT);
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [projectCollaboratorsSelected, setProjectCollaboratorsSelected]
    = useState<ProjectContent | null>(null);

  const projectsSliced = currentProjects.slice(0, currentGrid);

  const handleShowMoreProjects = () => {
    setCurrentGrid((grid) => grid + GRID_LIMIT);
  };

  useEffect(() => {
    setCurrentProjects(data.projectsSection.projects);
    setProjectCollaboratorsSelected(null);
  }, [data]);

  return (
    <ProjectsFilterProvider setCurrentProjects={setCurrentProjects}>
      <Container id="projects">
        <Content>
          <Header>
            <Heading data-aos="fade-down">
              <div className="heading-subtitle">
                <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
                <h2>{heading[0]}</h2>
              </div>

              <h1>{heading[1]}</h1>
            </Heading>

            <FilterContainer data-aos="fade-up">
              <NameFilterInput placeholder={filterNameTitleLabel} />

              <CategoryFilterButton
                tooltip={filterCategoryTooltipLabel}
                onClick={() => setShowFilterModal(true)}
              />
            </FilterContainer>
          </Header>

          <ProjectsList>
            {projectsSliced.map((project) => (
              <div key={project.name} data-aos="fade-up">
                <ProjectCard
                  project={project}
                  handleOpenCollaborationModal={() => setProjectCollaboratorsSelected(project)}
                />
              </div>
            ))}
          </ProjectsList>

          <Row>
            {currentProjects.length === 0 ? (
              <NotFoundText>
                {projectsNotfoundLabel}
              </NotFoundText>
            ) : null}

            {currentProjects.length > 0 && currentGrid < currentProjects.length ? (
              <ShowMoreButton
                type="button"
                data-aos="fade-up"
                onClick={handleShowMoreProjects}
              >
                {showMoreButtonLabel}
                <FiPlusCircle size={22} />
              </ShowMoreButton>
            ) : null}
          </Row>
        </Content>
      </Container>

      <CollaborationModal
        project={projectCollaboratorsSelected}
        isOpen={!!projectCollaboratorsSelected}
        handleClose={() => setProjectCollaboratorsSelected(null)}
      />

      <CategoryFilterModal
        isOpen={showFilterModal}
        setCurrentProjects={setCurrentProjects}
        handleClose={() => setShowFilterModal(false)}
      />
    </ProjectsFilterProvider>
  );
}

interface NameFilterInputProps {
  readonly placeholder: string;
}

function NameFilterInput({ placeholder }: NameFilterInputProps) {
  const { nameFilter, handleChangeNameFilter } = useProjectsFilter();
  return (
    <SearchInputContainer>
      <IoIosSearch size={24} />
      <input
        type="text"
        value={nameFilter}
        placeholder={placeholder}
        onChange={(e) => {
          handleChangeNameFilter(e.target.value);
        }}
      />
    </SearchInputContainer>
  );
}

interface CategoryFilterButtonProps {
  readonly tooltip: string;
  readonly onClick: () => void;
}

function CategoryFilterButton({ tooltip, onClick }: CategoryFilterButtonProps) {
  const { qtdCategoryFiltersSelected } = useProjectsFilter();
  return (
    <Tooltip title={tooltip}>
      <FilterButton type="button" onClick={onClick}>
        <FaFilter size={18} />
        {qtdCategoryFiltersSelected > 0 ? <FilterBadge>{qtdCategoryFiltersSelected}</FilterBadge> : null}
      </FilterButton>
    </Tooltip>
  );
}
