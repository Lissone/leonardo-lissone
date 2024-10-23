import { ContentLanguage } from '@interfaces/content';

interface ContentLang {
  'pt-br': ContentLanguage;
  'en-us': ContentLanguage;
}

export const contentLanguages: ContentLang = {
  'pt-br': {
    lang: 'pt-br',
    email: 'leonardo.lissonez@gmail.com',
    socials: [
      {
        name: 'Github',
        link: 'https://github.com/Lissone',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lissone/',
      },
      {
        name: 'Figma',
        link: 'https://www.figma.com/@lissone',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/lissonez/',
      },
    ],
    presentationSection: {
      heading: ['Olá,', 'eu sou', 'Leonardo Lissone'],
      text: '<p>Sou um desenvolvedor <em>Fullstack Javascript</em>, com mais de {{ carrerTime }} anos de experiência em <strong>desenvolvimento de software, design de interfaces (UI) e experiência de usuário (UX).</strong> Tive diversas experiências profissionais, desde colaborador de empresas á trabalhos freelance, onde desenvolvi diversas técnicas de desenvolvimento de software e interfaces.</p>',
      yearFirstWorkExperience: 2020,
    },
    aboutSection: {
      heading: ['Introdução', 'Sobre mim'],
      text: '<p>Amante da área de tecnologia, com foco em desenvolvimento <em>front-end/back-end</em>, <strong>interface de usuário</strong> e <strong>engenharia de software</strong>. Objetivo de me tornar um profissional cada vez mais <strong>completo</strong>, sempre buscando aprender e desenvolver projetos para aplicar e <strong>compartilhar conhecimentos</strong> e <strong>experiências</strong>. <strong>Formado</strong> no curso bacharel de <strong>Sistemas de Informação</strong>, criando aplicações de forma autônoma, em busca de desafios, trabalhando com carisma, vontade e paixão. <strong>Profissionalismo é meu foco</strong>.</p>',
      profilePhoto: {
        url: 'https://images.prismic.io/leonardo-lissone/f0ec48f1-86b2-4a45-bf0f-f643398ba1e5_Foto+com+fundo+s%C3%B3lido+%281%29.png?auto=compress,format',
        alt: 'Leonardo Dias Lissone Santomero',
      },
      recentTechnologies: [
        'Javascript (ES6+)',
        'Typescript',
        'NodeJs',
        'NestJs',
        'ReactJs',
        'GraphQL',
        'Python',
      ],
    },
    jobsSection: {
      heading: ['Minha jornada até aqui', 'Experiências'],
      jobs: [
        {
          company: 'G5 Partners',
          experiences: [
            {
              siteLink: 'https://g5partners.com/',
              role: 'Analista de Desenvolvimento Pleno',
              startDate: 'Fevereiro 2024',
              endDate: 'Presente',
              activities: [
                'Planejamento e desenvolvimento de arquiteturas de software.',
                'Colaboração com equipes operacionais para implantação de soluções com software.',
                'Desenvolvimento de novas ferramentas e funcionalidades para os usuários dos sistemas públicos e privados da empresa.',
                'Atuação na manutenção preventiva, preditiva e corretiva de softwares desenvolvidos.',
              ],
            },
            {
              siteLink: 'https://g5partners.com/',
              role: 'Analista de Desenvolvimento Júnior',
              startDate: 'Março 2022',
              endDate: 'Fevereiro 2024',
              activities: [
                'Desenvolvimento de novas ferramentas e funcionalidades para os usuários dos sistemas públicos e privados da empresa.',
                'Atuação na manutenção preventiva, preditiva e corretiva de softwares desenvolvidos.',
                'Migração de sistemas legados para tecnologias atuais utilizadas na empresa.',
                'Planejamento de design visual e experiência do usuário de aplicações web e mobile.',
                'Criação de scripts de automação de processos de rotina para área operacional.',
                'Elaboração de documentações técnicas para planejamento de novas implementações de sistema e manual para possíveis necessidades.',
              ],
            },
          ],
        },
        {
          company: 'Santander',
          experiences: [
            {
              siteLink:
                'https://www.santander.com.br/sustentabilidade/gestao-de-atividades/risco-gestao-integrada',
              role: 'Estagiário de inovação',
              startDate: 'Setembro 2021',
              endDate: 'Março 2022',
              activities: [
                'Planejamento, prototipagem e desenvolvimento de projeto interno com objetivo de trazer produtividade e integração de sistemas para analistas que avaliam propostas de crédito.',
                'Reestruturação de planilhas Excel para relatórios interativo, aplicando princípios de UX e análise de dados para a produtividade do cliente colaborador.',
                'Desenvolvimento front-end de projetos internos utilizando Angular.',
                'Geração de relatórios de rotina utilizando dados de big data.',
              ],
            },
          ],
        },
        {
          company: 'Serget',
          experiences: [
            {
              siteLink: 'http://www.serget.com.br/',
              role: 'Estagiário de desenvolvimento',
              startDate: 'Janeiro 2020',
              endDate: 'Setembro 2021',
              activities: [
                'Desenvolvimento e implantação de um novo sistema, destinado a cadastro e controle de cartões especiais para pessoas deficientes, idosas ou gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.',
                'Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes).',
                'Redesign e prototipagem de software web interno utilizando Figma.',
                'Colaboração no planejamento de novos sistemas.',
                'Reestruturação e refatoração de projetos já existentes.',
              ],
            },
          ],
        },
      ],
    },
    projectsSection: {
      heading: ['Meus trabalhos', 'Projetos Desenvolvidos'],
      projects: [
        {
          name: 'Point Control',
          description:
            'Um projeto completo de controle interno de gestão de pessoas, direcionado para o setor de recursos humanos de qualquer tipo de empresa.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/27e05a20-23c6-4c3a-bd17-b27d68ad9d44_pointcontrol-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'NodeJs',
            'ReactJs',
            'NextJs',
            'AngularJs',
            'ChakraUI',
            'Redis',
            'SqlServer',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Projeto Fullstack',
            },
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Moises Morais',
              role: 'Desenvolvedor Fullstack',
              photoUrl: 'https://github.com/MikaMorais.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/MikaMorais',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/moises-silva-de-morais/',
                },
              ],
            },
            {
              name: 'Stenio Rapchan',
              role: 'Desenvolvedor Fullstack',
              photoUrl: 'https://github.com/steniodr.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/steniodr',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/stenio-dias-rapchan/',
                },
              ],
            },
            {
              name: 'Vinicius Almeida',
              role: 'Engenheiro de software',
              photoUrl: 'https://github.com/almeidavini.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/almeidavini',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/vinicius-silva-de-almeida/',
                },
              ],
            },
          ],
          prototypeLink:
            'https://www.figma.com/file/L4N9BizFngAiGGjTCH058S/Point-Control?node-id=0%3A1&t=CSCocT0hI5Ubxn4z-1',
          repositoryLink: 'https://github.com/Lissone/point-control-api',
          productionLink: null,
        },
        {
          name: 'Qatar 2022 - Stikers',
          description:
            'Design de aplicativo de gerenciamento de figurinhas do álbum da copa de 2022 no Qatar. Com estatísticas, backup e sistema de trocas.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/cf76b662-8752-4537-b39d-4d67babce964_qtar2022-stikers-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Design Componentizado',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'mobile',
              label: 'Aplicativo',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/zK89GdfV68BMmZnSokaMoY/Gerenciador-de-Figurinhas---Catar-2022?node-id=0%3A1&t=YduVDyHnvpvq9FBB-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Eficient',
          description:
            'Design de landing page para venda de páginas de captura e sites customizados e personalizados de acordo com a marca no cliente.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/750ca26a-27a4-468f-ac81-59ec33793a24_eficient-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Design Componentizado',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'freelance',
              label: 'Freelance',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/EI8bLWi6mIW3PsbmkiSqHV/Eficient?node-id=30%3A552&t=IuvYOfO7GU3qOtjl-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Dan Doceria',
          description:
            'Design de site ecommerce de doces variados, com recompensas para cada pedido feito e mercado de cupons como diferencial. Foco na responsividade de aparelhos de móveis.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/d7e25922-6443-4d7e-97f4-baaa1d31760f_dandoceria-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Design Componentizado',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/zhnt25s3ITbbFREguqjm9J/Dan-Doceria?node-id=0%3A1&t=vdsNpjVdiPRmGV56-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Portfólio',
          description:
            'Website portfolio / bio criado para ser um ponto focal para todas as minhas experiências, projetos, histórias e principalmente aumentar e facilitar a rede de contatos.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/011fbaaa-3d12-43bf-b208-3e56d3097623_portfolio-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'NextJs', 'StyledComponents'],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
            {
              key: 'commit-lint',
              label: 'CommitLint',
            },
          ],
          details: [
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/VufrifzcSAEctTBgUFjzPT/Portif%C3%B3lio?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/leonardo-lissone',
          productionLink: null,
        },
        {
          name: 'WorldTrip',
          description:
            'Um site com informações e curiosidades sobre continentes, países e cidades, com o objetivo de incentivar e informar as pessoas sobre o turismo na região.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/a89dd0b0-4641-44a2-acfc-3e6c099d5fff_worldtrip-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'ChakraUI ',
            'PirsmicCMS',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'test',
              label: 'Teste',
            },
          ],
          details: [
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/opj6i3Zw5fxVjVwDeyNSAg/World-Trip?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/world-trip',
          productionLink: 'https://world-trip-rouge.vercel.app/',
        },
        {
          name: 'LixAttendance',
          description:
            'Um site de bate-papo de suporte entre o cliente com pergunta e o administrador respondente, onde o administrador pode escolher o cliente que deseja responder de acordo com a prioridade e fechar sua conexão assim que as consultas forem respondidas.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/28739747-2f23-4888-9d76-413a7ef34c6e_lixattendance-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'NodeJs ',
            'SocketIO',
            'SqlServer',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Projeto Fullstack',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/lix-attendance',
          productionLink: null,
        },
        {
          name: 'Pokedex',
          description:
            'Uma pokedex incrível, para você mergulhar no universo pokémon e ainda escolher seus pokémons favoritos e adicioná-los ao seu perfil!',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/96dea68a-2fe5-455a-8460-6a923ce2f6c9_pokedex-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'StyledComponents',
            'NodeJs ',
            'Firebase',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Projeto Fullstack',
            },
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/tjSrlP5Y0x6rK4rrA5Lqx6/Pokedex?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/pokedex',
          productionLink: 'https://pokedex-lissone.vercel.app/',
        },
        {
          name: 'Letmeask',
          description:
            'Plataforma que permite criar salas de quiz, para as pessoas fazerem perguntas e o dono da sala responder, curtir ou destacar perguntas específicas.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/4521c59e-8598-47b8-9be9-80573b63bd5f_letmeask-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'Sass', 'Firebase'],
          goodHabits: [],
          details: [
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Rocketseat',
              role: 'Instituição educacional',
              photoUrl: 'https://avatars.githubusercontent.com/u/28929274?s=200&v=4',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/Rocketseat',
                },
              ],
            },
            {
              name: 'Diego Fernandes',
              role: 'CTO da Rockeseat',
              photoUrl: 'https://github.com/diego3g.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/diego3g',
                },
              ],
            },
          ],
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/let-me-ask',
          productionLink: 'https://letmeask-8aa0f.web.app/',
        },
        {
          name: 'Podcastr',
          description:
            'Site de reprodução de podcasts, com player completo para ouvir seu episódio, avulso ou em playlists.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/1cee8699-e9c8-4ac2-afa9-a3548f517601_podcastr-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'StyledComponents',
            'JsonServer',
          ],
          goodHabits: [],
          details: [
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Rocketseat',
              role: 'Instituição educacional',
              photoUrl: 'https://avatars.githubusercontent.com/u/28929274?s=200&v=4',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/Rocketseat',
                },
              ],
            },
            {
              name: 'Diego Fernandes',
              role: 'CTO da Rockeseat',
              photoUrl: 'https://github.com/diego3g.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/diego3g',
                },
              ],
            },
          ],
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/podcastr',
          productionLink: 'https://podcastr-lissone.vercel.app/',
        },
        {
          name: 'SaganSat EA',
          description:
            'Site para arrecadação de valores, campanha e contato para um grupo de pesquisa independente, com o objetivo de lançar um cubesat no espaço para monitorar algumas rotas de aeronaves, onde podem acontecer possíveis acidentes por causa da pluma vulcânica.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/71bd71a7-eec0-4ce5-b563-ed66d2749fa5_sagansat-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'NextJs', 'StyledComponents'],
          goodHabits: [],
          details: [
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Matheus Nobre',
              role: 'Engenheiro da Computação',
              photoUrl: 'https://github.com/ccr5.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/ccr5',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/mattnobre/',
                },
              ],
            },
          ],
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/SaganSat-website',
          productionLink: 'https://sagansat.vercel.app/',
        },
      ],
      thumbnailAltLabel: 'Capa do projeto',
      prototypeLabel: 'Protótipo Figma',
      repositoryLabel: 'Repositório Github',
      showMoreButtonLabel: 'Mostrar mais projetos',
      projectsNotfoundLabel: 'Nenhum projeto com esses filtros foi encontrado!',
      collaborationLabel: 'Projeto Colaborativo',
      collaborationModalTitle: 'Colaboradores',
      collaborationModalText:
        'Faço questão de apresentar e agradecer a todos os colaboradores que influenciaram e ajudaram diretamente a planejar e desenvolver o projeto:',
      filterNameTitleLabel: 'Pesquise por nome',
      filterCategoryTooltipLabel: 'Filtros',
      filterCategoryTitleLabel: 'Pesquise por categorias',
      filterCategoryLabels: [
        {
          key: 'all',
          label: 'Todos',
        },
        {
          key: 'repositories',
          label: 'Repositórios',
        },
        {
          key: 'production',
          label: 'Disponíveis na internet',
        },
        {
          key: 'designs',
          label: 'Designs',
        },
        {
          key: 'fullstack',
          label: 'Fullstack',
        },
        {
          key: 'web',
          label: 'Sites',
        },
        {
          key: 'mobile',
          label: 'Aplicativos',
        },
        {
          key: 'freelance',
          label: 'Freelance',
        },
        {
          key: 'responsive',
          label: 'Responsivos',
        },
      ],
    },
    contactSection: {
      heading: ['O que fazer agora?', 'Entre em contato comigo'],
      text: 'Embora eu não esteja procurando novas oportunidades de trabalho no momento, minha caixa de entrada estará sempre aberta para qualquer discussão!',
      sendMessageModalContent: {
        title: 'Envie uma mensagem para mim',
        text: 'Preencha os campos para me enviar uma mensagem. Devo responder em menos de um dia, e desde já agradeço pelo seu contato!',
        emailMessageSuccess: 'Sua mensagem foi enviada!',
        emailMessageError:
          'Erro ao enviar email. Já estou trabalhando para resolver o problema!',
        buttonSendMessage: 'Enviar mensagem',
        input: {
          name: { label: 'Nome completo', placeholder: 'Leonardo Dias Lissone' },
          email: { label: 'Email', placeholder: 'exemplo@hotmail.com' },
          message: {
            label: 'Mensagem',
            placeholder:
              'Gostaria de enviar uma mensagem para entrar em contato direto com você!',
          },
        },
        validationInput: {
          nameRequiredLabel: 'Nome completo obrigatório',
          emailRequiredLabel: 'Email obrigatório',
          emailInvalidLabel: 'Email inválido',
          messageRequiredLabel: 'Mensagem obrigatória',
          messageMinLabel: 'Mensagem deve conter no mínimo de 20 caracteres',
        },
      },
    },
    headerButtons: {
      presentationButtonTooltip: 'Apresentação',
      aboutButtonTooltip: 'Sobre mim',
      workExperiencesButtonTooltip: 'Trabalhos',
      projectsButtonTooltip: 'Projetos',
    },
    sharedButtons: {
      resumeCv:
        'https://prismic-io.s3.amazonaws.com/leonardo-lissone/c5481f89-5bc6-4892-ac99-4075a542abf1_CV+-+PT-BR+-+Leonardo+Dias+Lissone.pdf',
      resumeButtonLabel: 'Resumo',
      contactButtonLabel: 'Contactar agora',
    },
  },
  'en-us': {
    lang: 'en-us',
    email: 'leonardo.lissonez@gmail.com',
    socials: [
      {
        name: 'Github',
        link: 'https://github.com/Lissone',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/lissone/',
      },
      {
        name: 'Figma',
        link: 'https://www.figma.com/@lissone',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/lissonez/',
      },
    ],
    presentationSection: {
      heading: ['Hi,', 'I am', 'Leonardo Lissone'],
      text: "<p>I'm a <em>Fullstack Javascript</em> developer, with more than {{ carrerTime }} years of experience in <strong>software development, interface (UI) and user experience (UX) design.</strong> I've had diverse experiences professionals, from corporate collaborators to freelance work, where I developed different software development techniques and interfaces.</p>",
      yearFirstWorkExperience: 2020,
    },
    aboutSection: {
      heading: ['Introduction', 'About me'],
      text: "<p>A technology lover, with a focus on <em>front-end/back-end</em> development, <strong>user interface</strong> and <strong>software engineering</strong>. Aim to become an increasingly <strong>complete</strong> professional, always looking to learn and develop projects to apply and <strong>share knowledge</strong> and <strong>experiences</strong>. <strong>Graduated</strong> in the bachelor's degree in <strong>Information Systems</strong>, creating applications autonomously, looking for challenges, working with charisma, will and passion. <strong>Professionalism is my focus</strong>.</p>",
      profilePhoto: {
        url: 'https://images.prismic.io/leonardo-lissone/f0ec48f1-86b2-4a45-bf0f-f643398ba1e5_Foto+com+fundo+s%C3%B3lido+%281%29.png?auto=compress,format',
        alt: 'Leonardo Dias Lissone Santomero',
      },
      recentTechnologies: [
        'Javascript (ES6+)',
        'Typescript',
        'NodeJs',
        'NestJs',
        'ReactJs',
        'GraphQL',
        'Python',
      ],
    },
    jobsSection: {
      heading: ['What I Have Done So Far', 'Work Experiences'],
      jobs: [
        {
          company: 'G5 Partners',
          experiences: [
            {
              siteLink: 'https://g5partners.com/',
              role: 'Development Analyst',
              startDate: 'February 2024',
              endDate: 'Present',
              activities: [
                'Planning and development of software architectures.',
                'Collaboration with operational teams to implement software solutions.',
                "Development of new tools and features for users of the company's public and private systems.",
                'Expertise in preventive, predictive and corrective maintenance of developed software.',
              ],
            },
            {
              siteLink: 'https://g5partners.com/',
              role: 'Junior Development Analyst',
              startDate: 'March 2022',
              endDate: 'February 2024',
              activities: [
                "Development of new tools and features for users of the company's public and private systems.",
                'Expertise in preventive, predictive and corrective maintenance of developed software.',
                'Migration of legacy systems to current technologies used in the company.',
                'Visual design planning and user experience of web and mobile applications.',
                'Creation of routine process automation scripts for the operational area.',
                'Elaboration of technical documentation for planning new system implementations and manual for possible needs.',
              ],
            },
          ],
        },
        {
          company: 'Santander',
          experiences: [
            {
              siteLink:
                'https://www.santander.com.br/sustentabilidade/gestao-de-atividades/risco-gestao-integrada',
              role: 'Innovation Intern',
              startDate: 'September 2021',
              endDate: 'March 2022',
              activities: [
                'Planning, prototyping and development of an internal project with the objective of bringing productivity and systems integration to analysts who evaluate credit proposals.',
                'Restructuring of Excel spreadsheets for interactive reports, applying UX principles and data analysis for employee customer productivity.',
                'Front-end development of internal projects using Angular.',
                'Routine reporting using big data.',
              ],
            },
          ],
        },
        {
          company: 'Serget',
          experiences: [
            {
              siteLink: 'http://www.serget.com.br/',
              role: 'Development Intern',
              startDate: 'January 2020',
              endDate: 'September 2021',
              activities: [
                'Development and implementation of a new system, aimed at registering and controlling special cards for disabled, elderly or pregnant people, who have the need to park in exclusive spaces.',
                'Implementation of development techniques for the elaboration of systems (technical documentation of applications, using flowcharts and wireframes).',
                'Redesign and prototyping of internal web software using Figma.',
                'Collaboration in the planning of new systems.',
                'Restructuring and refactoring of existing projects.',
              ],
            },
          ],
        },
      ],
    },
    projectsSection: {
      heading: ['My works', "Projects I've Developed"],
      projects: [
        {
          name: 'Point Control',
          description:
            'A complete project of internal people management control, aimed at the human resources sector of any type of company.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/27e05a20-23c6-4c3a-bd17-b27d68ad9d44_pointcontrol-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'NodeJs',
            'ReactJs',
            'NextJs',
            'AngularJs',
            'ChakraUI',
            'Redis',
            'SqlServer',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Fullstack Project',
            },
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Moises Morais',
              role: 'Fullstack Developer',
              photoUrl: 'https://github.com/MikaMorais.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/MikaMorais',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/moises-silva-de-morais/',
                },
              ],
            },
            {
              name: 'Stenio Rapchan',
              role: 'Fullstack Developer',
              photoUrl: 'https://github.com/steniodr.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/steniodr',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/stenio-dias-rapchan/',
                },
              ],
            },
            {
              name: 'Vinicius Almeida',
              role: 'Software engineer',
              photoUrl: 'https://github.com/almeidavini.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/almeidavini',
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/vinicius-silva-de-almeida/',
                },
              ],
            },
          ],
          prototypeLink:
            'https://www.figma.com/file/L4N9BizFngAiGGjTCH058S/Point-Control?node-id=0%3A1&t=CSCocT0hI5Ubxn4z-1',
          repositoryLink: 'https://github.com/Lissone/point-control-api',
          productionLink: null,
        },
        {
          name: 'Qatar 2022 - Stikers',
          description:
            'Qatar 2022 World Cup album sticker management application design. With statistics, backup and exchange system.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/cf76b662-8752-4537-b39d-4d67babce964_qtar2022-stikers-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Componentized Design',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'mobile',
              label: 'Mobile Application',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/zK89GdfV68BMmZnSokaMoY/Gerenciador-de-Figurinhas---Catar-2022?node-id=0%3A1&t=YduVDyHnvpvq9FBB-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Eficient',
          description:
            "Landing page design for selling capture pages and customized and personalized websites according to the client's brand.",
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/750ca26a-27a4-468f-ac81-59ec33793a24_eficient-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Componentized Design',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'freelance',
              label: 'Freelance',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/EI8bLWi6mIW3PsbmkiSqHV/Eficient?node-id=30%3A552&t=IuvYOfO7GU3qOtjl-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Dan Doceria',
          description:
            'Ecommerce website design for varied sweets, with rewards for each order placed and coupon market as a differential. Focus on responsiveness of mobile devices.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/d7e25922-6443-4d7e-97f4-baaa1d31760f_dandoceria-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Figma'],
          goodHabits: [
            {
              key: 'componentized',
              label: 'Componentized Design',
            },
          ],
          details: [
            {
              key: 'figma',
              label: 'Figma',
            },
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/zhnt25s3ITbbFREguqjm9J/Dan-Doceria?node-id=0%3A1&t=vdsNpjVdiPRmGV56-1',
          repositoryLink: null,
          productionLink: null,
        },
        {
          name: 'Portfólio',
          description:
            'Website portfolio / bio created to be a focal point for all my experiences, projects, stories and especially to increase and facilitate the network of contacts.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/011fbaaa-3d12-43bf-b208-3e56d3097623_portfolio-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'NextJs', 'StyledComponents'],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
            {
              key: 'commit-lint',
              label: 'CommitLint',
            },
          ],
          details: [
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/VufrifzcSAEctTBgUFjzPT/Portif%C3%B3lio?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/leonardo-lissone',
          productionLink: null,
        },
        {
          name: 'WorldTrip',
          description:
            'A website with information and curiosities about continents, countries and cities, with the aim of encouraging and informing people about tourism in the region.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/a89dd0b0-4641-44a2-acfc-3e6c099d5fff_worldtrip-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'ChakraUI ',
            'PirsmicCMS',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'test',
              label: 'Teste',
            },
          ],
          details: [
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/opj6i3Zw5fxVjVwDeyNSAg/World-Trip?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/world-trip',
          productionLink: 'https://world-trip-rouge.vercel.app/',
        },
        {
          name: 'LixAttendance',
          description:
            'A support chat site between customer with question and answering admin, where admin can choose the customer they want to answer according to priority and close their connection once queries are answered.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/28739747-2f23-4888-9d76-413a7ef34c6e_lixattendance-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'NodeJs ',
            'SocketIO',
            'SqlServer',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Fullstack Project',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/lix-attendance',
          productionLink: null,
        },
        {
          name: 'Pokedex',
          description:
            'An incredible pokedex, for you to delve into the pokemon universe and even choose your favorite pokemons and add them to your profile!',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/96dea68a-2fe5-455a-8460-6a923ce2f6c9_pokedex-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'StyledComponents',
            'NodeJs ',
            'Firebase',
          ],
          goodHabits: [
            {
              key: 'eslint',
              label: 'Eslint',
            },
            {
              key: 'prettier',
              label: 'Prettier',
            },
          ],
          details: [
            {
              key: 'fullstack',
              label: 'Fullstack Project',
            },
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink:
            'https://www.figma.com/file/tjSrlP5Y0x6rK4rrA5Lqx6/Pokedex?node-id=0%3A1',
          repositoryLink: 'https://github.com/Lissone/pokedex',
          productionLink: 'https://pokedex-lissone.vercel.app/',
        },
        {
          name: 'Letmeask',
          description:
            'Platform that allows you to create quiz rooms, for people to ask questions and the owner of the room to answer, like or highlight specific questions.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/4521c59e-8598-47b8-9be9-80573b63bd5f_letmeask-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'Sass', 'Firebase'],
          goodHabits: [],
          details: [
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Rocketseat',
              role: 'Educational institution',
              photoUrl: 'https://avatars.githubusercontent.com/u/28929274?s=200&v=4',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/Rocketseat',
                },
              ],
            },
            {
              name: 'Diego Fernandes',
              role: "Rockeseat's CTO",
              photoUrl: 'https://github.com/diego3g.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/diego3g',
                },
              ],
            },
          ],
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/let-me-ask',
          productionLink: 'https://letmeask-8aa0f.web.app/',
        },
        {
          name: 'Podcastr',
          description:
            'Podcast playback site, with a complete player to listen to your episode, single or in playlists.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/1cee8699-e9c8-4ac2-afa9-a3548f517601_podcastr-thumbnail.png?auto=compress,format',
          mainTechnologies: [
            'Typescript',
            'ReactJs',
            'NextJs',
            'StyledComponents',
            'JsonServer',
          ],
          goodHabits: [],
          details: [
            {
              key: 'responsive',
              label: 'Responsive',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: [
            {
              name: 'Rocketseat',
              role: 'Educational institution',
              photoUrl: 'https://avatars.githubusercontent.com/u/28929274?s=200&v=4',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/Rocketseat',
                },
              ],
            },
            {
              name: 'Diego Fernandes',
              role: "Rockeseat's CTO",
              photoUrl: 'https://github.com/diego3g.png',
              socials: [
                {
                  name: 'Github',
                  link: 'https://github.com/diego3g',
                },
              ],
            },
          ],
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/podcastr',
          productionLink: 'https://podcastr-lissone.vercel.app/',
        },
        {
          name: 'SaganSat EA',
          description:
            'Website for fundraising, campaign and contact for an independent research group, with the objective of launching a cubesat in space to monitor some aircraft routes, where possible accidents can happen because of the volcanic plume.',
          thumbnailUrl:
            'https://images.prismic.io/leonardo-lissone/71bd71a7-eec0-4ce5-b563-ed66d2749fa5_sagansat-thumbnail.png?auto=compress,format',
          mainTechnologies: ['Typescript', 'ReactJs', 'NextJs', 'StyledComponents'],
          goodHabits: [],
          details: [
            {
              key: 'responsive',
              label: 'Responsivo',
            },
            {
              key: 'web',
              label: 'Web',
            },
          ],
          collaborators: null,
          prototypeLink: null,
          repositoryLink: 'https://github.com/Lissone/SaganSat-website',
          productionLink: 'https://sagansat.vercel.app/',
        },
      ],
      thumbnailAltLabel: 'Project cover',
      prototypeLabel: 'Figma Prototype',
      repositoryLabel: 'Github Repository',
      showMoreButtonLabel: 'Show more projects',
      projectsNotfoundLabel: 'No projects with these filters were found',
      collaborationLabel: 'Collaborative Project',
      collaborationModalTitle: 'Collaborators',
      collaborationModalText:
        'I would like to introduce and thank all the collaborators who directly influenced and helped to plan and develop the project:',
      filterNameTitleLabel: 'Search by name',
      filterCategoryTooltipLabel: 'Filters',
      filterCategoryTitleLabel: 'Search by categories',
      filterCategoryLabels: [
        {
          key: 'all',
          label: 'All',
        },
        {
          key: 'repositories',
          label: 'Repositories',
        },
        {
          key: 'production',
          label: 'Available on internet',
        },
        {
          key: 'designs',
          label: 'Designs',
        },
        {
          key: 'fullstack',
          label: 'Fullstack',
        },
        {
          key: 'web',
          label: 'Websites',
        },
        {
          key: 'mobile',
          label: 'Mobile Applications',
        },
        {
          key: 'freelance',
          label: 'Freelance',
        },
        {
          key: 'responsive',
          label: 'Responsive',
        },
      ],
    },
    contactSection: {
      heading: ['What’s Next?', 'Contact me'],
      text: 'While I am not currently looking for new job opportunities, my inbox will always be open for any discussions!',
      sendMessageModalContent: {
        title: 'Send a message to me',
        text: 'Fill in the fields to send me a message. I should respond in less than a day, and thanks in advance for your contact!',
        emailMessageSuccess: 'Your message was sent!',
        emailMessageError: `Error sending email. I'm already working to solve the problem!`,
        buttonSendMessage: 'Send message',
        input: {
          name: { label: 'Full name', placeholder: 'John Doe' },
          email: { label: 'Email', placeholder: 'example@hotmail.com' },
          message: {
            label: 'Message',
            placeholder: 'I would like to send a message to contact you directly!',
          },
        },
        validationInput: {
          nameRequiredLabel: 'Required full name',
          emailRequiredLabel: 'Required email',
          emailInvalidLabel: 'Invalid email',
          messageRequiredLabel: 'Required message',
          messageMinLabel: 'Message must contain at least 20 characters',
        },
      },
    },
    headerButtons: {
      presentationButtonTooltip: 'Presentation',
      aboutButtonTooltip: 'About me',
      workExperiencesButtonTooltip: 'Work experiences',
      projectsButtonTooltip: 'Projects',
    },
    sharedButtons: {
      resumeCv:
        'https://prismic-io.s3.amazonaws.com/leonardo-lissone/2db36942-f9ff-4534-bb9c-999c7dd38d93_CV+-+EN-US+-+Leonardo+Dias+Lissone.pdf',
      resumeButtonLabel: 'Resume',
      contactButtonLabel: 'Contact now',
    },
  },
};
