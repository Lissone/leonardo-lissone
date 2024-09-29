import { FiExternalLink } from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { ReactTyped } from 'react-typed';

import { PresentationSectionContent, SocialsContent } from '@interfaces/content';

import { useSendMessageModal } from '@contexts/SendMessageModalContext';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Tooltip } from '@components/shared/Tooltip';

import { replaceVariable } from '@shared/utils';

import {
  ButtonsContainer,
  ContactButton,
  Container,
  Content,
  Heading,
  ImageContainer,
  ResumeLinkButton,
  ResumeText,
  SocialsContainer,
} from './styles';

interface PresentationProperties {
  readonly content: PresentationSectionContent;
  readonly resumeCv: string;
  readonly resumeButtonLabel: string;
  readonly contactButtonLabel: string;
  readonly socials: SocialsContent[];
}

export function Presentation({
  content, resumeCv, resumeButtonLabel, contactButtonLabel, socials,
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

        <ButtonsContainer>
          <ResumeLinkButton href={resumeCv} target="_blank" rel="noopener noreferrer">
            {resumeButtonLabel}
            <FiExternalLink size={22} />
          </ResumeLinkButton>

          <ContactButton type="button" onClick={() => toggleSendMessageModalOpen(true)}>
            {contactButtonLabel}
            <IoPaperPlaneOutline size={22} />
          </ContactButton>
        </ButtonsContainer>
      </Content>

      <ImageContainer>
        <img src="/images/bearing-led.svg" alt="Bearing with led" />
      </ImageContainer>
    </Container>
  );
}
