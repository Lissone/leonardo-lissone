import { SocialsContent } from '@interfaces/content'

import { Tooltip } from '@components/Tooltip'

import { SocialIcon } from '../Icons/SocialIcon'
import { Container, Content } from './styles'

interface FixedSocialsProps {
  readonly socials: SocialsContent[]
}

export function FixedSocials({ socials }: FixedSocialsProps) {
  return (
    <Container>
      <Content>
        {socials.map(social => (
          <Tooltip key={social.name} title={social.name}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <SocialIcon name={social.name} />
            </a>
          </Tooltip>
        ))}

        <img src="/images/cable-fixed-socials.svg" alt="Led cable" />
      </Content>
    </Container>
  )
}
