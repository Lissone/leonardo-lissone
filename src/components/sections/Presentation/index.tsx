import { ReactTyped } from 'react-typed';

import { PresentationSectionContent, SocialsContent } from '@interfaces/content';

import { useSendMessageModal } from '@contexts/SendMessageModalContext';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Tooltip } from '@components/shared/Tooltip';

import { replaceVariable } from '@shared/utils';

import {
  ContactButton,
  Container,
  Content,
  Heading,
  ImageContainer,
  ResumeText,
  SocialsContainer,
} from './styles';

interface PresentationProperties {
  readonly content: PresentationSectionContent;
  readonly contactButtonLabel: string;
  readonly socials: SocialsContent[];
}

export function Presentation({
  content, contactButtonLabel, socials,
}: PresentationProperties) {
  const { toggleSendMessageModalOpen } = useSendMessageModal();

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
          <h1>
            <ReactTyped
              strings={[heading[2]]}
              typeSpeed={100}
              backSpeed={60}
              backDelay={1000}
              fadeOutDelay={200}
              showCursor
              loop
            />
          </h1>
        </Heading>

        <ResumeText
          dangerouslySetInnerHTML={{
            __html: contentText,
          }}
        />

        <SocialsContainer>
          {socials.map((social) => (
            <Tooltip key={social.name} title={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${social.name} website (in a new tab)`}
              >
                <SocialIcon name={social.name} />
              </a>
            </Tooltip>
          ))}
        </SocialsContainer>

        <ContactButton type="button" onClick={() => toggleSendMessageModalOpen(true)}>
          {contactButtonLabel}
        </ContactButton>
      </Content>

      <ImageContainer>
        <img src="/images/bearing-led.svg" alt="Bearing with led" />
      </ImageContainer>
    </Container>
  );
}
