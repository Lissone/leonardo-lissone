import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi'
import Tooltip from 'react-tooltip'

import { ProjectContent } from '@interfaces/content'

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
              <>
                <a
                  data-tip
                  data-for="tooltip-figma"
                  href={content.figmaLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFigma size={24} />
                </a>
                <Tooltip id="tooltip-figma" effect="solid">
                  Protótipo
                </Tooltip>
              </>
            )}

            {content.repositoryLink && (
              <>
                <a
                  data-tip
                  data-for="tooltip-github"
                  href={content.repositoryLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub size={24} />
                </a>
                <Tooltip id="tooltip-github" effect="solid">
                  Repositório
                </Tooltip>
              </>
            )}

            {content.productionLink && (
              <>
                <a
                  data-tip
                  data-for="tooltip-production"
                  href={content.productionLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGlobe size={24} />
                </a>
                <Tooltip id="tooltip-production" effect="solid">
                  Link
                </Tooltip>
              </>
            )}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>{content.name}</Heading>

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
                <div key={technology}>
                  <a data-tip data-for={`tooltip-${technology}`}>
                    <img
                      src={`/icons/${technology}.svg`}
                      alt={`${capitalizeString(technology)} icon`}
                    />
                  </a>
                  <Tooltip id={`tooltip-${technology}`} effect="solid">
                    {capitalizeString(technology)}
                  </Tooltip>
                </div>
              ))}
            </div>

            <div>
              {(content.isResponsive || content.platform === 'mobile') && (
                <>
                  <a data-tip data-for="tooltip-mobile">
                    <img src="/icons/mobile.svg" alt="Cellphone icon" />
                  </a>
                  <Tooltip id="tooltip-mobile" effect="solid">
                    {content.isResponsive ? 'Responsivo' : 'Mobile'}
                  </Tooltip>
                </>
              )}

              {content.platform === 'web' && (
                <>
                  <a data-tip data-for="tooltip-web">
                    <img src="/icons/web.svg" alt="Web icon" />
                  </a>
                  <Tooltip id="tooltip-web" effect="solid">
                    Web
                  </Tooltip>
                </>
              )}

              {content.platform === 'desktop' && (
                <>
                  <a data-tip data-for="tooltip-desktop">
                    <img src="/icons/desktop.svg" alt="Desktop icon" />
                  </a>
                  <Tooltip id="tooltip-desktop" effect="solid">
                    Desktop
                  </Tooltip>
                </>
              )}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
