import { useData } from '@contexts/DataContext';

import { SocialIcon } from '@components/shared/Icons/SocialIcon';
import { Tooltip } from '@components/shared/Tooltip';

import { Container, Content } from './styles';

export function FixedSocials() {
  const { data } = useData();
  const { socials } = data;

  return (
    <Container>
      <Content>
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

        <img src="/images/cable-fixed-socials.svg" alt="Led cable" />
      </Content>
    </Container>
  );
}
