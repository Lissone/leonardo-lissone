import { FaFilter } from 'react-icons/fa';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';
import { useProjectsCategoryFilter } from '@contexts/ProjectsCategoryFilterContext';

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

  const { allFilters, filterExists, toggleFilter } = useProjectsCategoryFilter();

  return (
    <Modal
      isOpen={isOpen}
      title={filterCategoryTitleLabel}
      headerIcon={<FaFilter size={24} />}
      handleClose={handleClose}
    >
      <Content>
        <ul>
          {allFilters.map((filter) => {
            const { name, func } = filter;
            if (!name) return null;

            const id = `checkbox-${filter.name}`;
            return (
              <li key={id}>
                <input
                  id={id}
                  value={name}
                  type="checkbox"
                  checked={filterExists(name)}
                  onChange={() => toggleFilter(name, func)}
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
