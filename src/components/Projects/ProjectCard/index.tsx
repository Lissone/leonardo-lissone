import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi'

import { ProjectContent } from '@interfaces/content'

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Information,
  Heading,
  Divider,
  TechnologiesRow,
  FeaturedInformation,
  SeparateRow
} from './styles'

interface ProjectCardProps {
  content: ProjectContent
}

export function ProjectCard({ content }: ProjectCardProps) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <img src={content.thumbnail.url} alt={content.thumbnail.alt} />

          <CoverActions className="project-card-actions">
            {content.figmaLink && (
              <a href={content.figmaLink} target="_blank" rel="noreferrer">
                <FiFigma size={24} />
              </a>
            )}

            {content.repositoryLink && (
              <a href={content.repositoryLink} target="_blank" rel="noreferrer">
                <FiGithub size={24} />
              </a>
            )}

            {content.productionLink && (
              <a href={content.productionLink} target="_blank" rel="noreferrer">
                <FiGlobe size={24} />
              </a>
            )}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>{content.name}</Heading>

            <Divider />

            {content.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <TechnologiesRow>
              <span>{content.mainTechnologies}</span>
            </TechnologiesRow>
          </FeaturedInformation>

          <SeparateRow>
            <div>
              {content.goodHabits.map(technology => {
                if (technology === 'eslint')
                  return (
                    <img key={technology} src="/icons/eslint.svg" alt="Eslint icon" />
                  )
                else if (technology === 'prettier')
                  return (
                    <img key={technology} src="/icons/prettier.svg" alt="Prettier icon" />
                  )
                else if (technology === 'test')
                  return <img key={technology} src="/icons/test.svg" alt="Test icon" />
              })}
            </div>

            <div>
              {content.isResponsive || content.platform === 'mobile' ? (
                <img src="/icons/mobile.svg" alt="Cellphone icon" />
              ) : null}

              {content.platform === 'web' && <img src="/icons/web.svg" alt="Web icon" />}

              {content.platform === 'desktop' && (
                <img src="/icons/desktop.svg" alt="Desktop icon" />
              )}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
