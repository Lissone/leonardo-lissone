import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi'

import { ProjectContent } from '@interfaces/content'

import { Tooltip } from '@components/shared/Tooltip'

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
  readonly content: ProjectContent
  readonly thumbnailAltLabel: string
  readonly collaborationLabel: string
  readonly prototypeLabel: string
  readonly repositoryLabel: string
  readonly handleOpenCollaborationModal: () => void
}

export function ProjectCard({
  content,
  thumbnailAltLabel,
  collaborationLabel,
  prototypeLabel,
  repositoryLabel,
  handleOpenCollaborationModal
}: ProjectCardProps) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <img src={content.thumbnailUrl} alt={`${thumbnailAltLabel} ${content.name}`} />

          <CoverActions className="project-card-actions">
            {content.prototypeLink ? (
              <Tooltip title={prototypeLabel}>
                <a href={content.prototypeLink} target="_blank" rel="noreferrer">
                  <FiFigma size={24} />
                </a>
              </Tooltip>
            ) : null}

            {content.repositoryLink ? (
              <Tooltip title={repositoryLabel}>
                <a href={content.repositoryLink} target="_blank" rel="noreferrer">
                  <FiGithub size={24} />
                </a>
              </Tooltip>
            ) : null}

            {content.productionLink ? (
              <Tooltip title="Link">
                <a href={content.productionLink} target="_blank" rel="noreferrer">
                  <FiGlobe size={24} />
                </a>
              </Tooltip>
            ) : null}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>
              <h2>{content.name}</h2>

              {content.collaborators ? (
                <Tooltip title={collaborationLabel}>
                  <img
                    src="/icons/collaboration.svg"
                    alt="icon for collaborative projects"
                    onClick={handleOpenCollaborationModal}
                  />
                </Tooltip>
              ) : null}
            </Heading>

            <Divider />

            <p>{content.description}</p>

            <TechnologiesRow>
              <span>{content.mainTechnologies.join(' ')}</span>
            </TechnologiesRow>
          </FeaturedInformation>

          <SeparateRow>
            <div>
              {content.goodHabits.map(({ key, label }) => (
                <Tooltip key={key} title={label}>
                  <img src={`/icons/${key}.svg`} alt={`${label} icon`} />
                </Tooltip>
              ))}
            </div>

            <div>
              {content.details.map(({ key, label }) => (
                <Tooltip key={key} title={label}>
                  <img src={`/icons/${key}.svg`} alt={`${label} icon`} />
                </Tooltip>
              ))}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
