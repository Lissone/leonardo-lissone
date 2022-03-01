import { ContactContent, SocialContent } from '@type/content'

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
  contactContent: ContactContent
  contactButtonLabel: string
  socials: SocialContent[]
  email: string
}

export function Contact({
  contactContent,
  contactButtonLabel,
  socials,
  email
}: ContactProps) {
  return (
    <Container id="contact">
      <Content data-aos="fade-up">
        <Subtitle>
          <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

          <h2>{contactContent.heading[0]}</h2>
        </Subtitle>

        <Title>{contactContent.heading[1]}</Title>

        {contactContent.text.map((text, index) => (
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
