import { FiHelpCircle } from 'react-icons/fi'

import { ProjectCard } from './ProjectCard'
import { Container, Heading, Content } from './styles'

export function Projects() {
  return (
    <Container id="projects">
      <header>
        <img src="/images/led-light.svg" alt="Luz de led" />

        <img src="/images/cable-projects.svg" alt="Cabo de led" className="cable" />

        <Heading>
          <h1>Alguns projetos que já desenvolvi</h1>

          <button type="button">
            <FiHelpCircle size={24} />
          </button>
        </Heading>
      </header>

      <Content>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Content>
    </Container>
  )
}