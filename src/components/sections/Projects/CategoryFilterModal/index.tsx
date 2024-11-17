import { FaFilter } from 'react-icons/fa';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';
import { useProjectsFilter } from '@contexts/ProjectsFilterContext';

import { Modal } from '@components/shared/Modal';

import { Content } from './styles';

interface CategoryFilterModalProps {
  readonly isOpen: boolean;
  readonly setCurrentProjects: (projects: ProjectContent[]) => void;
  readonly handleClose: () => void;
}

export function CategoryFilterModal({
  isOpen, handleClose,
}: CategoryFilterModalProps) {
  const { data } = useData();
  const { projectsSection } = data;
  const { filterCategoryTitleLabel } = projectsSection;

  const { allCategoryFilters, categoryFilterExists, handleToggleCategoryFilter } = useProjectsFilter();

  return (
    <Modal
      isOpen={isOpen}
      title={filterCategoryTitleLabel}
      headerIcon={<FaFilter size={24} />}
      handleClose={handleClose}
    >
      <Content>
        <ul>
          {allCategoryFilters.map((filter) => {
            const { name, func } = filter;
            if (!name) return null;

            const id = `checkbox-${filter.name}`;
            return (
              <li key={id}>
                <input
                  id={id}
                  value={name}
                  type="checkbox"
                  checked={categoryFilterExists(name)}
                  onChange={() => handleToggleCategoryFilter(name, func)}
                />
                <label htmlFor={id}>{filter.name}</label>
              </li>
            );
          })}
        </ul>
      </Content>
    </Modal>
  );
}
