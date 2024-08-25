import { ProjectContent } from '@interfaces/content'

import { SocialIcon } from '@components/shared/Icons/SocialIcon'
import { Modal } from '@components/shared/Modal'
import { Tooltip } from '@components/shared/Tooltip'

import {
  Content,
  CollaboratorAvatar,
  CollaboratorInfos,
  CollaboratorSocials
} from './styles'

interface CollaborationModalProps {
  readonly isOpen: boolean
  readonly title: string
  readonly text: string
  readonly project: ProjectContent | null
  readonly handleClose: () => void
}

export function CollaborationModal({
  isOpen,
  title,
  text,
  project,
  handleClose
}: CollaborationModalProps) {
  if (!project) return null

  return (
    <Modal
      isOpen={isOpen}
      title={`${project.name} - ${title}`}
      headerIcon={<img src="/icons/group-users.svg" alt="Group of users icon" />}
      handleClose={handleClose}
    >
      <Content>
        <span>{text}</span>

        <ul>
          {project.collaborators?.map(collaborator => (
            <li>
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
                {collaborator.socials.map(social => (
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
  )
}
