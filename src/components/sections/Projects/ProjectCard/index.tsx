import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi';

import { ProjectContent } from '@interfaces/content';

import { Tooltip } from '@components/shared/Tooltip';

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Divider,
  FeaturedInformation,
  Heading,
  Information,
  SeparateRow,
  TechnologiesRow,
} from './styles';

interface ProjectCardProperties {
  readonly content: ProjectContent;
  readonly thumbnailAltLabel: string;
  readonly collaborationLabel: string;
  readonly prototypeLabel: string;
  readonly repositoryLabel: string;
  readonly handleOpenCollaborationModal: () => void;
}

export function ProjectCard({
  content,
  thumbnailAltLabel,
  collaborationLabel,
  prototypeLabel,
  repositoryLabel,
  handleOpenCollaborationModal,
}: ProjectCardProperties) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <img src={content.thumbnailUrl} alt={`${thumbnailAltLabel} ${content.name}`} />

          <CoverActions className="project-card-actions">
            {content.prototypeLink ? (
              <Tooltip title={prototypeLabel}>
                <a
                  href={content.prototypeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit project Figma repository (in a new tab)"
                >
                  <FiFigma size={24} />
                </a>
              </Tooltip>
            ) : null}

            {content.repositoryLink ? (
              <Tooltip title={repositoryLabel}>
                <a
                  href={content.repositoryLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit project Github repository (in a new tab)"
                >
                  <FiGithub size={24} />
                </a>
              </Tooltip>
            ) : null}

            {content.productionLink ? (
              <Tooltip title="Link">
                <a
                  href={content.productionLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${content.name} website (in a new tab)`}
                >
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
                  <button type="button" onClick={handleOpenCollaborationModal}>
                    <img src="/icons/collaboration.svg" alt="icon for collaborative projects" />
                  </button>
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
  );
}
