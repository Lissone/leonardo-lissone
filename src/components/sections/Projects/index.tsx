import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';
import { ProjectsCategoryFilterProvider } from '@contexts/ProjectsCategoryFilterContext';

import { Tooltip } from '@components/shared/Tooltip';

import { CategoryFilterModal } from './CategoryFilterModal';
import { CollaborationModal } from './CollaborationModal';
import { ProjectCard } from './ProjectCard';
import {
  Container,
  Content,
  FilterButton,
  FilterContainer,
  Heading,
  NotFoundText,
  SearchInputContainer,
  ShowMoreButton,
  Subtitle,
} from './styles';

const GRID_LIMIT = 6;

export function Projects() {
  const { data } = useData();
  const { projectsSection } = data;
  const {
    heading, filterNameTitleLabel, filterCategoryTooltipLabel,
    projects, projectsNotfoundLabel, showMoreButtonLabel,
  } = projectsSection;

  const [filter, setFilter] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentGrid, setCurrentGrid] = useState(GRID_LIMIT);
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [projectCollaboratorsSelected, setProjectCollaboratorsSelected]
    = useState<ProjectContent | null>(null);

  const projectsSliced = currentProjects.slice(0, currentGrid);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);

    const productsFiltered = projects.filter((project) => {
      const name = project.name.toLowerCase();
      return name.includes(value.toLowerCase());
    });

    setCurrentProjects(productsFiltered);
  };

  const handleShowMoreProjects = () => {
    setCurrentGrid((grid) => grid + GRID_LIMIT);
  };

  useEffect(() => {
    setProjectCollaboratorsSelected(null);
  }, [data]);

  return (
    <ProjectsCategoryFilterProvider setCurrentProjects={setCurrentProjects}>
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
            <SearchInputContainer>
              <IoIosSearch size={24} />
              <input
                type="text"
                value={filter}
                placeholder={filterNameTitleLabel}
                onChange={handleChangeFilter}
              />
            </SearchInputContainer>

            <Tooltip title={filterCategoryTooltipLabel}>
              <FilterButton type="button" onClick={() => setShowFilterModal(true)}>
                {/* // ! TODO: Adicionar informação flutuante de quantos filtros selecionados */}
                <FaFilter size={18} />
              </FilterButton>
            </Tooltip>
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

        <CategoryFilterModal
          isOpen={showFilterModal}
          setCurrentProjects={setCurrentProjects}
          handleClose={() => setShowFilterModal(false)}
        />
      </Container>
    </ProjectsCategoryFilterProvider>
  );
}
