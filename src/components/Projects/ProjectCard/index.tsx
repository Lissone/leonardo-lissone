import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi'

import { ProjectContent } from '@interfaces/content'

import { Tooltip } from '@components/Tooltip'

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
  content: ProjectContent
}

export function ProjectCard({ content }: ProjectCardProps) {
  function capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <img src={content.thumbnail.url} alt={content.thumbnail.alt} />

          <CoverActions className="project-card-actions">
            {content.figmaLink && (
              <Tooltip title="Protótipo Figma">
                <a href={content.figmaLink} target="_blank" rel="noreferrer">
                  <FiFigma size={24} />
                </a>
              </Tooltip>
            )}

            {content.repositoryLink && (
              <Tooltip title="Repositório Github">
                <a href={content.repositoryLink} target="_blank" rel="noreferrer">
                  <FiGithub size={24} />
                </a>
              </Tooltip>
            )}

            {content.productionLink && (
              <Tooltip title="Link">
                <a href={content.productionLink} target="_blank" rel="noreferrer">
                  <FiGlobe size={24} />
                </a>
              </Tooltip>
            )}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>
              <h2>{content.name}</h2>

              {content.isCollaboration && (
                <Tooltip title="Participação Colaborativa">
                  <img
                    src="/icons/collaboration.svg"
                    alt="icon for collaborative projects"
                  />
                </Tooltip>
              )}
            </Heading>

            <Divider />

            {content.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <TechnologiesRow>
              <span>{content.mainTechnologies}</span>
            </TechnologiesRow>
          </FeaturedInformation>

          <SeparateRow>
            <div>
              {content.goodHabits.map(technology => (
                <Tooltip key={technology} title={capitalizeString(technology)}>
                  <img
                    src={`/icons/${technology}.svg`}
                    alt={`${capitalizeString(technology)} icon`}
                  />
                </Tooltip>
              ))}
            </div>

            <div>
              {(content.isResponsive || content.platform === 'mobile') && (
                <Tooltip title={content.isResponsive ? 'Responsivo' : 'Mobile'}>
                  <img src="/icons/mobile.svg" alt="Cellphone icon" />
                </Tooltip>
              )}

              {content.platform === 'web' && (
                <Tooltip title="Web">
                  <img src="/icons/web.svg" alt="Web icon" />
                </Tooltip>
              )}

              {content.platform === 'desktop' && (
                <Tooltip title="Desktop">
                  <img src="/icons/desktop.svg" alt="Desktop icon" />
                </Tooltip>
              )}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
