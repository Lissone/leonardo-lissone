import { FiGithub, FiGlobe } from 'react-icons/fi'

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Heading,
  Divider,
  TechnologiesRow,
  FeaturedInformation
} from './styles'

export function ProjectCard() {
  return (
    <Container>
      <Content>
        <Cover>
          <img src="/portfolio-image.png" alt="Imagem de um projeto" />

          <CoverActions className="project-card-actions">
            <a href="#">
              <FiGithub size={24} />
            </a>
            <a href="#">
              <FiGlobe size={24} />
            </a>
          </CoverActions>
        </Cover>

        <Heading>Portfolio</Heading>

        <Divider />

        <p>
          An incredible pokedex, for you to delve into the pokemon universe and even
          choose your favorite pokemons and add them to your profile!
        </p>

        <TechnologiesRow>
          <span>React, Next.js, StyledComponents, NodeJs, Firebase</span>
        </TechnologiesRow>

        <FeaturedInformation>
          <div>
            <img src="/eslint.svg" alt="Ícone do eslint" />

            <img src="/prettier.svg" alt="Ícone do prettier" />
          </div>

          <div>
            <img src="/mobile.svg" alt="Ícone de celular" />

            <img src="/web.svg" alt="Ícone de rede" />
          </div>
        </FeaturedInformation>
      </Content>
    </Container>
  )
}
