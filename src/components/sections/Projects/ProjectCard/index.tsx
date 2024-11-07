import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi';

import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';

import { Tooltip } from '@components/shared/Tooltip';

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Divider,
  Heading,
  Information,
  SeparateRow,
  TechnologiesRow,
} from './styles';

interface ProjectCardProperties {
  readonly project: ProjectContent;
  readonly handleOpenCollaborationModal: () => void;
}

export function ProjectCard({ project, handleOpenCollaborationModal }: ProjectCardProperties) {
  const { data } = useData();
  const { projectsSection } = data;
  const {
    thumbnailAltLabel, collaborationLabel,
    prototypeLabel, repositoryLabel,
  } = projectsSection;

  return (
    <Container data-aos="fade-up">
      <Content>
        <Cover>
          <img src={project.thumbnailUrl} alt={`${thumbnailAltLabel} ${project.name}`} />

          <CoverActions className="project-card-actions">
            {project.prototypeLink ? (
              <Tooltip title={prototypeLabel}>
                <a
                  href={project.prototypeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit project Figma repository (in a new tab)"
                >
                  <FiFigma size={24} />
                </a>
              </Tooltip>
            ) : null}

            {project.repositoryLink ? (
              <Tooltip title={repositoryLabel}>
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit project Github repository (in a new tab)"
                >
                  <FiGithub size={24} />
                </a>
              </Tooltip>
            ) : null}

            {project.productionLink ? (
              <Tooltip title="Link">
                <a
                  href={project.productionLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} website (in a new tab)`}
                >
                  <FiGlobe size={24} />
                </a>
              </Tooltip>
            ) : null}
          </CoverActions>
        </Cover>

        <Information>
          <div>
            <Heading>
              <h2>{project.name}</h2>

              {project.collaborators ? (
                <Tooltip title={collaborationLabel}>
                  <button type="button" onClick={handleOpenCollaborationModal}>
                    <img src="/icons/collaboration.svg" alt="icon for collaborative projects" />
                  </button>
                </Tooltip>
              ) : null}
            </Heading>

            <Divider />

            <p>{project.description}</p>

            <TechnologiesRow>
              <span>{project.mainTechnologies.join(' ')}</span>
            </TechnologiesRow>
          </div>

          <SeparateRow>
            <div>
              {project.goodHabits.map(({ key, label }) => (
                <Tooltip key={key} title={label}>
                  <div>
                    <img src={`/icons/${key}.svg`} alt={`${label} icon`} />
                  </div>
                </Tooltip>
              ))}
            </div>

            <div>
              {project.details.map(({ key, label }) => (
                <Tooltip key={key} title={label}>
                  <div>
                    <img src={`/icons/${key}.svg`} alt={`${label} icon`} />
                  </div>
                </Tooltip>
              ))}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  );
}
