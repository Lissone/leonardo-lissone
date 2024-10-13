import { ProjectContent } from '@interfaces/content';

import { useData } from '@contexts/DataContext';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Modal } from '@components/shared/Modal';
import { Tooltip } from '@components/shared/Tooltip';

import {
  CollaboratorAvatar,
  CollaboratorInfos,
  CollaboratorSocials,
  Content,
} from './styles';

interface CollaborationModalProps {
  readonly isOpen: boolean;
  readonly project: ProjectContent | null;
  readonly handleClose: () => void;
}

export function CollaborationModal({
  isOpen,
  project,
  handleClose,
}: CollaborationModalProps) {
  const { data } = useData();
  const { projectsSection } = data;
  const { collaborationModalTitle, collaborationModalText } = projectsSection;

  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      title={`${project.name} - ${collaborationModalTitle}`}
      headerIcon={<img src="/icons/group-users.svg" alt="Group of users icon" />}
      handleClose={handleClose}
    >
      <Content>
        <span>{collaborationModalText}</span>

        <ul>
          {project.collaborators?.map((collaborator) => (
            <li key={collaborator.name}>
              <div>
                <CollaboratorAvatar>
                  <div className="collaborator-avatar-content">
                    {collaborator.photoUrl ? (
                      <img src={collaborator.photoUrl} alt={`${collaborator.name}`} />
                    ) : (
                      <img
                        className="default-user-img"
                        src="/icons/user.svg"
                        alt="Default user avatar icon"
                      />
                    )}
                  </div>
                </CollaboratorAvatar>

                <CollaboratorInfos>
                  <p>{collaborator.role}</p>
                  <span>{collaborator.name}</span>
                </CollaboratorInfos>
              </div>

              <CollaboratorSocials>
                {collaborator.socials.map((social) => (
                  <Tooltip key={social.name} title={social.name}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit a collaborator ${social.name} website (in a new tab)`}
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  </Tooltip>
                ))}
              </CollaboratorSocials>
            </li>
          ))}
        </ul>
      </Content>
    </Modal>
  );
}
