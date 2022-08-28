import { ContactContent, SocialContent } from '@interfaces/content'

import { SocialIcon } from '@components/SocialIcon'

import {
  Container,
  Content,
  Subtitle,
  Title,
  Text,
  ContactButton,
  Socials
} from './styles'

interface ContactProps {
  content: ContactContent
  socials: SocialContent[]
  email: string
  contactButtonLabel: string
}

export function Contact({ content, socials, email, contactButtonLabel }: ContactProps) {
  return (
    <Container id="contact">
      <Content data-aos="fade-up">
        <Subtitle>
          <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

          <h2>{content.heading[0]}</h2>
        </Subtitle>

        <Title>{content.heading[1]}</Title>

        {content.text.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}

        <ContactButton href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {contactButtonLabel}
        </ContactButton>

        <Socials>
          {socials.map(social => (
            <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
              <SocialIcon name={social.name} />
            </a>
          ))}
        </Socials>
      </Content>

      <img className="bearing-led" src="/images/bearing-led.svg" alt="Bearing with led" />
    </Container>
  )
}
