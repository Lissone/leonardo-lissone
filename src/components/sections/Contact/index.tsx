import { useState } from 'react';

import { ContactSectionContent, SocialsContent } from '@interfaces/content';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Tooltip } from '@components/shared/Tooltip';

import { SendMessageModal } from './SendMessageModal';
import {
  ContactButton,
  Container,
  Content,
  Socials,
  Subtitle,
  Text,
  Title,
} from './styles';

interface ContactProps {
  readonly content: ContactSectionContent;
  readonly socials: SocialsContent[];
  readonly contactButtonLabel: string;
}

export function Contact({ content, socials, contactButtonLabel }: ContactProps) {
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);

  return (
    <Container id="contact">
      <Content data-aos="fade-up">
        <Subtitle>
          <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />

          <h2>{content.heading[0]}</h2>
        </Subtitle>

        <Title>{content.heading[1]}</Title>

        <Text>{content.text}</Text>

        <ContactButton type="button" onClick={() => setIsSendMessageModalOpen(true)}>
          {contactButtonLabel}
        </ContactButton>

        <Socials>
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
        </Socials>
      </Content>

      <img className="bearing-led" src="/images/bearing-led.svg" alt="Bearing with led" />

      <SendMessageModal
        isOpen={isSendMessageModalOpen}
        content={content.sendMessageModalContent}
        handleClose={() => setIsSendMessageModalOpen(false)}
      />
    </Container>
  );
}
