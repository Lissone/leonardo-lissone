import { FiGithub, FiGlobe } from 'react-icons/fi'

import { ProjectContent } from '@type/content'

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Information,
  Heading,
  Divider,
  TechnologiesRow,
  FeaturedInformation,
  SeparateRow
} from './styles'

interface ProjectCardProps {
  projectContent: ProjectContent
}

export function ProjectCard({ projectContent }: ProjectCardProps) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <img src={projectContent.thumbnail.url} alt={projectContent.thumbnail.alt} />

          <CoverActions className="project-card-actions">
            {projectContent.repositoryLink && (
              <a href={projectContent.repositoryLink} target="_blank" rel="noreferrer">
                <FiGithub size={24} />
              </a>
            )}

            {projectContent.productionLink && (
              <a href={projectContent.productionLink} target="_blank" rel="noreferrer">
                <FiGlobe size={24} />
              </a>
            )}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>{projectContent.name}</Heading>

            <Divider />

            {projectContent.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <TechnologiesRow>
              <span>{projectContent.mainTechnologies}</span>
            </TechnologiesRow>
          </FeaturedInformation>

          <SeparateRow>
            <div>
              {projectContent.goodHabits.map(technology => {
                if (technology === 'eslint')
                  return (
                    <img key={technology} src="/icons/eslint.svg" alt="Eslint icon" />
                  )
                else if (technology === 'prettier')
                  return (
                    <img key={technology} src="/icons/prettier.svg" alt="Prettier icon" />
                  )
                else if (technology === 'test')
                  return <img key={technology} src="/icons/test.svg" alt="Test icon" />
              })}
            </div>

            <div>
              {projectContent.isResponsive || projectContent.platform === 'mobile' ? (
                <img src="/icons/mobile.svg" alt="Cellphone icon" />
              ) : null}

              {projectContent.platform === 'web' && (
                <img src="/icons/web.svg" alt="Web icon" />
              )}

              {projectContent.platform === 'desktop' && (
                <img src="/icons/desktop.svg" alt="Desktop icon" />
              )}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
