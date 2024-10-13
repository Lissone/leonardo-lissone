import { useEffect, useState } from 'react';

import {
  ProjectContent,
  ProjectsFiltersLabels,
  ProjectsFiltersLabelsKeys,
} from '@interfaces/content';

import { useData } from '@contexts/DataContext';

import { Container } from './styles';

interface CategoryFilterProps {
  readonly setCurrentProjects: (projects: ProjectContent[]) => void;
}

interface Filter {
  readonly func: (project: ProjectContent) => boolean;
  readonly key?: ProjectsFiltersLabelsKeys;
  readonly name?: string;
}

export function CategoryFilter({ setCurrentProjects }: CategoryFilterProps) {
  const { data } = useData();
  const { projectsSection } = data;
  const { projects, filtersLabels } = projectsSection;

  const allFilters: Filter[] = [];
  populateFilterLabelByLanguage(allFilters, filtersLabels);

  const [currentFilters, setCurrentFilters] = useState<Filter[]>([allFilters[0]]);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters]);

  useEffect(() => {
    populateFilterLabelByLanguage(allFilters, filtersLabels);
    setCurrentFilters([allFilters[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersLabels]);

  const filterExists = (name: string) => currentFilters.some((f) => f.name === name);

  const addFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    setCurrentFilters((filters) => [...filters, { name, func: fnc }]);
  };

  const removeFilter = (name: string) => {
    setCurrentFilters((filters) => filters.filter((f) => !(f.name === name)));
  };

  const toggleFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    if (filterExists(name)) {
      removeFilter(name);
    } else {
      addFilter(name, fnc);
    }
  };

  const applyFilters = () => {
    let filteredProjects = projects;
    if (currentFilters.length > 0) {
      for (const currentFilter of currentFilters) {
        filteredProjects = filteredProjects.filter((project) => currentFilter.func(project));
      }
    } else {
      filteredProjects = [];
    }
    setCurrentProjects(filteredProjects);
  };

  return (
    <Container>
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
    </Container>
  );
}

const populateFilterLabelByLanguage = (
  allFilters: Filter[],
  filtersLabels: ProjectsFiltersLabels[],
) => {
  for (const filterFunc of allFiltersFuncs) {
    const filterLabel = filtersLabels.find((v) => v.key === filterFunc.key);
    if (filterLabel) {
      allFilters.push({
        name: filterLabel.label,
        func: filterFunc.func,
      });
    }
  }
};

const allFiltersFuncs: Filter[] = [
  { key: 'all', func: (project) => !!project },
  { key: 'repositories', func: (project) => !!project.repositoryLink },
  { key: 'production', func: (project) => !!project.productionLink },
  {
    key: 'designs',
    func: (project) => !project.repositoryLink && !!project.prototypeLink,
  },
  {
    key: 'fullstack',
    func: (project) => project.details.some((detail) => detail.key === 'fullstack'),
  },
  {
    key: 'responsive',
    func: (project) => project.details.some((detail) => detail.key === 'responsive'),
  },
  {
    key: 'web',
    func: (project) => project.details.some((detail) => detail.key === 'web'),
  },
  {
    key: 'mobile',
    func: (project) => project.details.some((detail) => detail.key === 'mobile'),
  },
];
