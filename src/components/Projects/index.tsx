// import { FiHelpCircle } from 'react-icons/fi'

import { ProjectsContent } from '@type/content'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content } from './styles'

interface ProjectsProps {
  projectsContent: ProjectsContent
}

export function Projects({ projectsContent }: ProjectsProps) {
  return (
    <Container id="projects">
      <header>
        <Heading>
          <h1>{projectsContent.heading}</h1>

          {/* <button type="button">
            <FiHelpCircle size={24} />
          </button> */}
        </Heading>
      </header>

      <Content>
        {projectsContent.projects.map(project => (
          <ProjectCard key={project.name} projectContent={project} />
        ))}
      </Content>
    </Container>
  )
}
