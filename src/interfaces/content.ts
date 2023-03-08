export interface ContentLanguage {
  readonly lang: string
  readonly email: string
  readonly socials: SocialsContent[]
  readonly presentationSection: PresentationSectionContent
  readonly aboutSection: AboutSectionContent
  readonly jobsSection: JobsSectionContent
  readonly projectsSection: ProjectsSectionContent
  readonly contactSection: ContactSectionContent
  readonly sharedButtons: {
    readonly resumeCv: string
    readonly resumeButtonLabel: string
    readonly contactButtonLabel: string
  }
}

export interface SocialsContent {
  readonly name: string
  readonly link: string
}

export interface PresentationSectionContent {
  readonly heading: string[]
  readonly text: string
}

export interface AboutSectionContent {
  readonly heading: string
  readonly text: string
  readonly profilePhoto: {
    readonly url: string
    readonly alt: string
  }
  readonly recentTechnologies: string[]
}

export interface JobsSectionContent {
  readonly heading: string
  readonly jobs: {
    readonly company: string
    readonly experiences: {
      readonly siteLink: string
      readonly role: string
      readonly startDate: string
      readonly endDate: string
      readonly activities: string[]
    }[]
  }[]
}

export interface ProjectsSectionContent {
  readonly heading: string
  readonly projects: ProjectContent[]
  readonly thumbnailAltLabel: string
  readonly collaborationLabel: string
  readonly prototypeLabel: string
  readonly repositoryLabel: string
  readonly showMoreButtonLabel: string
}

export interface ProjectContent {
  readonly name: string
  readonly description: string
  readonly mainTechnologies: string[]
  readonly isCollaboration: boolean
  readonly thumbnailUrl: string
  readonly goodHabits: {
    readonly key: 'eslint' | 'prettier' | 'test'
    readonly label: string
  }[]
  readonly details: {
    readonly key: 'web' | 'mobile' | 'desktop' | 'responsive' | 'design' | 'fullstack'
    readonly label: string
  }[]
  readonly prototypeLink: string | null
  readonly repositoryLink: string | null
  readonly productionLink: string | null
}

export interface ContactSectionContent {
  readonly heading: string[]
  readonly text: string
}
