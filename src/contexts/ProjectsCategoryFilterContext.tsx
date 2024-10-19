import {
  ReactNode, createContext, useCallback, useContext,
  useEffect, useMemo, useState,
} from 'react';

import {
  ProjectContent,
  ProjectsCategoryFilterLabels,
  ProjectsCategoryFilterLabelsKeys,
} from '@interfaces/content';

import { useData } from './DataContext';

interface ProjectsCategoryFilterContextType {
  readonly allFilters: Filter[];
  readonly qtdFiltersSelected: number;
  readonly filterExists: (name: string) => boolean;
  readonly toggleFilter: (name: string, fnc: (project: ProjectContent) => boolean) => void;
}

interface ProjectsCategoryFilterProviderProps {
  readonly setCurrentProjects: (projects: ProjectContent[]) => void;
  readonly children: ReactNode;
}

interface Filter {
  readonly func: (project: ProjectContent) => boolean;
  readonly key?: ProjectsCategoryFilterLabelsKeys;
  readonly name?: string;
}

// --------------------

const ProjectsCategoryFilterContext = createContext({} as ProjectsCategoryFilterContextType);

// ! TODO: Combinar filtro de texto com categoria
export function ProjectsCategoryFilterProvider({
  setCurrentProjects, children,
}: ProjectsCategoryFilterProviderProps) {
  const { data } = useData();
  const { projectsSection } = data;
  const { projects, filterCategoryLabels } = projectsSection;

  const allFilters: Filter[] = getFiltersByLanguage(filterCategoryLabels);

  const [currentFilters, setCurrentFilters] = useState<Filter[]>([allFilters[0]]);

  // não deve contar o filtro "All" (todos)
  const qtdFiltersSelected = currentFilters.some((f) => f.name === 'All')
    ? currentFilters.length - 1
    : currentFilters.length;

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters]);

  const filterExists = useCallback(
    (name: string) => currentFilters.some((f) => f.name === name),
    [currentFilters],
  );

  const addFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    setCurrentFilters((filters) => [...filters, { name, func: fnc }]);
  };

  const removeFilter = (name: string) => {
    setCurrentFilters((filters) => filters.filter((f) => !(f.name === name)));
  };

  const toggleFilter = useCallback(
    (name: string, fnc: (project: ProjectContent) => boolean) => {
      if (filterExists(name)) {
        removeFilter(name);
      } else {
        addFilter(name, fnc);
      }
    }, [filterExists],
  );

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

  const contextValues = useMemo(
    () => ({ allFilters, qtdFiltersSelected, filterExists, toggleFilter }),
    [allFilters, qtdFiltersSelected, filterExists, toggleFilter],
  );

  return (
    <ProjectsCategoryFilterContext.Provider value={contextValues}>
      {children}
    </ProjectsCategoryFilterContext.Provider>
  );
}

export const useProjectsCategoryFilter = () => useContext(ProjectsCategoryFilterContext);

const getFiltersByLanguage = (filtersLabels: ProjectsCategoryFilterLabels[]) => {
  const allFilters: Filter[] = [];

  for (const filterFunc of allFiltersFuncs) {
    const filterLabel = filtersLabels.find((v) => v.key === filterFunc.key);
    if (filterLabel) {
      allFilters.push({
        name: filterLabel.label,
        func: filterFunc.func,
      });
    }
  }

  return allFilters;
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
