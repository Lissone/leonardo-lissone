import { SocialContent } from '@types/content'

import { SocialIcon } from '../SocialIcon'
import { Container, Content } from './styles'

interface FixedSocialsProps {
  socials: SocialContent[]
}

export function FixedSocials({ socials }: FixedSocialsProps) {
  return (
    <Container>
      <Content>
        {socials.map(social => (
          <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
            <SocialIcon name={social.name} />
          </a>
        ))}

        <img src="/images/cable-fixed-socials.svg" alt="Led cable" />
      </Content>
    </Container>
  )
}
