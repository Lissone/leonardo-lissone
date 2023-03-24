import { PresentationSectionContent } from '@interfaces/content'

import {
  Container,
  ImageContainer,
  Content,
  Heading,
  ResumeText,
  ContactButton
} from './styles'

interface PresentationProps {
  readonly content: PresentationSectionContent
  readonly contactButtonLabel: string
}

export function Presentation({ content, contactButtonLabel }: PresentationProps) {
  return (
    <Container id="presentation">
      <Content data-aos="fade-right">
        <Heading>
          <h3>{content.heading[0]}</h3>
          <h2>{content.heading[1]}</h2>
          <h1>{content.heading[2]}</h1>
        </Heading>

        <ResumeText
          dangerouslySetInnerHTML={{
            __html: content.text
          }}
        />

        <ContactButton to="contact" smooth duration={1000} spy offset={-80}>
          {contactButtonLabel}
        </ContactButton>
      </Content>

      <ImageContainer>
        <img src="/images/bearing-led.svg" alt="Bearing with led" />
      </ImageContainer>
    </Container>
  )
}
