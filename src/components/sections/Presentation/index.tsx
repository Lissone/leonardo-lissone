import { PresentationSectionContent } from '@interfaces/content';

import { replaceVariable } from '@shared/utils';

import {
  ContactButton,
  Container,
  Content,
  Heading,
  ImageContainer,
  ResumeText,
} from './styles';

interface PresentationProperties {
  readonly content: PresentationSectionContent;

  readonly contactButtonLabel: string;
}

export function Presentation({ content, contactButtonLabel }: PresentationProperties) {
  const { heading, text, yearFirstWorkExperience } = content;

  const currentYear = new Date().getFullYear();
  const carrerTime = (currentYear - yearFirstWorkExperience).toString();
  const contentText = replaceVariable(text, 'carrerTime', carrerTime);

  return (
    <Container id="presentation">
      <Content data-aos="fade-right">
        <Heading>
          <h3>{heading[0]}</h3>
          <h2>{heading[1]}</h2>
          <h1>{heading[2]}</h1>
        </Heading>

        <ResumeText
          dangerouslySetInnerHTML={{
            __html: contentText,
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
  );
}
