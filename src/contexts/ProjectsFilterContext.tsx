import {
  Dispatch,
  ReactNode, SetStateAction, createContext, useCallback, useContext,
  useEffect, useMemo, useState,
} from 'react';

import {
  ProjectContent,
  ProjectsCategoryFilterLabels,
  ProjectsCategoryFilterLabelsKeys,
} from '@interfaces/content';

import { useData } from './DataContext';

interface ProjectsFilterContextType {
  readonly nameFilter: string;
  readonly allCategoryFilters: CategoryFilter[];
  readonly qtdCategoryFiltersSelected: number;
  readonly categoryFilterExists: (name: string) => boolean;
  readonly handleToggleCategoryFilter: (name: string, fnc: (project: ProjectContent) => boolean) => void;
  readonly handleChangeNameFilter: (value: string) => void;
}

interface ProjectsFilterProviderProps {
  readonly setCurrentProjects: Dispatch<SetStateAction<ProjectContent[]>>;
  readonly children: ReactNode;
}

interface CategoryFilter {
  readonly func: (project: ProjectContent) => boolean;
  readonly key?: ProjectsCategoryFilterLabelsKeys;
  readonly name?: string;
}

// --------------------

const ProjectsFilterContext = createContext({} as ProjectsFilterContextType);

export function ProjectsFilterProvider({
  setCurrentProjects, children,
}: ProjectsFilterProviderProps) {
  const { data } = useData();
  const { projectsSection } = data;
  const { projects, filterCategoryLabels } = projectsSection;

  const allCategoryFilters: CategoryFilter[] = getFiltersByLanguage(filterCategoryLabels);

  const [nameFilter, setNameFilter] = useState('');
  const [currentCategoryFilters, setCurrentCategoryFilters] = useState<CategoryFilter[]>([allCategoryFilters[0]]);

  // não deve contar o filtro "All" (todos)
  const qtdCategoryFiltersSelected = currentCategoryFilters.some((f) => f.name === 'All')
    ? currentCategoryFilters.length - 1
    : currentCategoryFilters.length;

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryFilters]);

  const categoryFilterExists = useCallback(
    (name: string) => currentCategoryFilters.some((f) => f.name === name),
    [currentCategoryFilters],
  );

  const addFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    setCurrentCategoryFilters((filters) => [...filters, { name, func: fnc }]);
  };

  const removeFilter = (name: string) => {
    setCurrentCategoryFilters((filters) => filters.filter((f) => !(f.name === name)));
  };

  const handleToggleCategoryFilter = useCallback(
    (name: string, fnc: (project: ProjectContent) => boolean) => {
      if (categoryFilterExists(name)) {
        removeFilter(name);
      } else {
        addFilter(name, fnc);
      }
    }, [categoryFilterExists],
  );

  const applyFilters = useCallback(() => {
    let filteredProjects = projects;
    if (currentCategoryFilters.length > 0) {
      for (const currentFilter of currentCategoryFilters) {
        filteredProjects = filteredProjects.filter((project) => currentFilter.func(project));
      }
    } else {
      filteredProjects = [];
    }
    setCurrentProjects(filteredProjects);
  }, [currentCategoryFilters, projects, setCurrentProjects]);

  const handleChangeNameFilter = useCallback((value: string) => {
    applyFilters();
    setNameFilter(value);

    setCurrentProjects((currentProjects) => {
      return currentProjects.filter((project) => {
        const name = project.name.toLowerCase();
        return name.includes(value.toLowerCase());
      });
    });
  }, [applyFilters, setCurrentProjects]);

  const contextValues = useMemo(
    () => ({
      nameFilter, allCategoryFilters, qtdCategoryFiltersSelected,
      handleChangeNameFilter, categoryFilterExists, handleToggleCategoryFilter,
    }),
    [
      nameFilter, allCategoryFilters, qtdCategoryFiltersSelected,
      handleChangeNameFilter, categoryFilterExists, handleToggleCategoryFilter,
    ],
  );

  return (
    <ProjectsFilterContext.Provider value={contextValues}>
      {children}
    </ProjectsFilterContext.Provider>
  );
}

export const useProjectsFilter = () => useContext(ProjectsFilterContext);

const getFiltersByLanguage = (filtersLabels: ProjectsCategoryFilterLabels[]) => {
  const allCategoryFilters: CategoryFilter[] = [];

  for (const filterFunc of allFiltersFuncs) {
    const filterLabel = filtersLabels.find((v) => v.key === filterFunc.key);
    if (filterLabel) {
      allCategoryFilters.push({
        name: filterLabel.label,
        func: filterFunc.func,
      });
    }
  }

  return allCategoryFilters;
};

const allFiltersFuncs: CategoryFilter[] = [
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
