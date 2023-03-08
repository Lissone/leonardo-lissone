/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react'

import {
  ProjectContent,
  ProjectsFiltersLabels,
  ProjectsFiltersLabelsKeys
} from '@interfaces/content'

import { Container } from './styles'

interface CategoryFilterProps {
  readonly projects: ProjectContent[]
  readonly filtersLabels: ProjectsFiltersLabels[]
  readonly setCurrentProjects: (projects: ProjectContent[]) => void
}

interface Filter {
  readonly func: (project: ProjectContent) => boolean
  readonly key?: ProjectsFiltersLabelsKeys
  readonly name?: string
}

export function CategoryFilter({
  projects,
  filtersLabels,
  setCurrentProjects
}: CategoryFilterProps) {
  const allFilters: Filter[] = []
  populateFilterLabelByLanguage(allFilters, filtersLabels)

  const [currentFilters, setCurrentFilters] = useState<Filter[]>([allFilters[0]])

  useEffect(() => {
    applyFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters])

  useEffect(() => {
    populateFilterLabelByLanguage(allFilters, filtersLabels)
    setCurrentFilters([allFilters[0]])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersLabels])

  const filterExists = (name: string) =>
    currentFilters.find(f => f.name === name) !== undefined

  const addFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    setCurrentFilters(filters => [...filters, { name, func: fnc }])
  }

  const removeFilter = (name: string) => {
    setCurrentFilters(filters => filters.filter(f => !(f.name === name)))
  }

  const toggleFilter = (name: string, fnc: (project: ProjectContent) => boolean) => {
    if (filterExists(name)) {
      removeFilter(name)
    } else {
      addFilter(name, fnc)
    }
  }

  const applyFilters = () => {
    let filteredProjects = projects
    if (currentFilters.length !== 0) {
      currentFilters.forEach(currentFilter => {
        filteredProjects = filteredProjects.filter(project => currentFilter.func(project))
      })
    } else {
      filteredProjects = []
    }
    setCurrentProjects(filteredProjects)
  }

  return (
    <Container>
      <ul>
        {allFilters.map(filter => {
          const { name, func } = filter
          if (!name) return null

          const id = `checkbox-${filter.name}`
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
          )
        })}
      </ul>
    </Container>
  )
}

const populateFilterLabelByLanguage = (
  allFilters: Filter[],
  filtersLabels: ProjectsFiltersLabels[]
) => {
  allFiltersFuncs.forEach(filterFunc => {
    const filterLabel = filtersLabels.find(v => v.key === filterFunc.key)
    if (filterLabel) {
      allFilters.push({
        name: filterLabel.label,
        func: filterFunc.func
      })
    }
  })
}

const allFiltersFuncs: Filter[] = [
  { key: 'all', func: project => !!project },
  { key: 'repositories', func: project => !!project.repositoryLink },
  { key: 'production', func: project => !!project.productionLink },
  {
    key: 'designs',
    func: project => !project.repositoryLink && !!project.prototypeLink
  },
  {
    key: 'fullstack',
    func: project => !!project.details.find(detail => detail.key === 'fullstack')
  },
  {
    key: 'web',
    func: project => !!project.details.find(detail => detail.key === 'web')
  },
  {
    key: 'responsive',
    func: project => !!project.details.find(detail => detail.key === 'responsive')
  }
]
