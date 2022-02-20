import { Container, Content, Heading, ImageContainer } from './styles'
import { Tabs } from './Tabs'
import { HeadingContentTab, Highlight } from './Tabs/styles'

export function WorkExperiences() {
  return (
    <Container id="work-experiences">
      <Content>
        <Heading>
          <img src="/icons/arrow-heading.svg" alt="Seta grande com led" />

          <h1>Experiências de trabalho</h1>
        </Heading>

        <Tabs>
          <div id="Santander">
            <HeadingContentTab>
              <h1>
                Estagiário de inovação no{' '}
                <Highlight href="#" target="_blank" rel="noreferrer">
                  Santander
                </Highlight>
              </h1>

              <span>Setembro 2021 - Presente</span>
            </HeadingContentTab>

            <ul>
              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>
                  Desenvolvimento e implantação de um novo sistema, destinado a cadastro e
                  controle de cartões especiais para pessoas deficientes, idosas ou
                  gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.
                </p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>
                  Implementação de técnicas de desenvolvimento para a elaboração de
                  sistemas (Documentação técnica de aplicações, utilizando flowcharts e
                  wireframes).
                </p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>Colaboração no planejamento de novos sistemas.</p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>Reestruturação e refatoração de projetos já existentes.</p>
              </li>
            </ul>
          </div>

          <div id="Serget">
            <HeadingContentTab>
              <h1>
                Estagiário de desenvolvimento na{' '}
                <Highlight href="#" target="_blank" rel="noreferrer">
                  Serget
                </Highlight>
              </h1>

              <span>Janeiro 2020 - Setembro 2021</span>
            </HeadingContentTab>

            <ul>
              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>
                  Desenvolvimento e implantação de um novo sistema, destinado a cadastro e
                  controle de cartões especiais para pessoas deficientes, idosas ou
                  gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.
                </p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>
                  Implementação de técnicas de desenvolvimento para a elaboração de
                  sistemas (Documentação técnica de aplicações, utilizando flowcharts e
                  wireframes).
                </p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>Colaboração no planejamento de novos sistemas.</p>
              </li>

              <li>
                <img src="/icons/arrow.svg" alt="Seta vermelha com led" />

                <p>Reestruturação e refatoração de projetos já existentes.</p>
              </li>
            </ul>
          </div>
        </Tabs>
      </Content>

      <ImageContainer>
        <img src="/images/prism-cut.svg" alt="Prima cortado com led" />
      </ImageContainer>
    </Container>
  )
}
