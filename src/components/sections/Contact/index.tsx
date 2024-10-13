import { IoPaperPlaneOutline } from 'react-icons/io5';

import { useData } from '@contexts/DataContext';
import { useSendMessageModal } from '@contexts/SendMessageModalContext';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Tooltip } from '@components/shared/Tooltip';

import {
  ContactButton,
  Container,
  Content,
  Heading,
  Socials,
  Subtitle,
  Text,
} from './styles';

export function Contact() {
  const { data } = useData();
  const { toggleSendMessageModalOpen } = useSendMessageModal();

  const { contactSection, sharedButtons, socials } = data;
  const { heading, text } = contactSection;

  return (
    <Container id="contact">
      <Content data-aos="fade-up">
        <Heading>
          <Subtitle>
            <img src="/icons/arrow-heading.svg" alt="Big arrow with led" />
            <h2>{heading[0]}</h2>
          </Subtitle>

          <h1>{heading[1]}</h1>
        </Heading>

        <Text>{text}</Text>

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

        <ContactButton type="button" onClick={() => toggleSendMessageModalOpen(true)}>
          {sharedButtons.contactButtonLabel}
          <IoPaperPlaneOutline size={22} />
        </ContactButton>

      </Content>

      <img className="bearing-led" src="/images/bearing-led.svg" alt="Bearing with led" />
    </Container>
  );
}
