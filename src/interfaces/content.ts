export interface SocialContent {
  name: string
  link: string
}

export interface PresentationContent {
  heading: string[]
  text: string
}

export interface AboutContent {
  heading: string
  text: string
  profilePhoto: {
    url: string
    alt: string
  }
  recentTechnologies: string[]
}

export interface JobsContent {
  heading: string
  jobs: {
    company: string
    experiences: {
      company: string
      siteLink: string
      role: string
      startDate: string
      endDate: string
      activities: string[]
    }[]
  }[]
}

export interface ProjectContent {
  thumbnail: {
    url: string
    alt: string
  }
  name: string
  description: string[]
  platform: string
  isResponsive: boolean
  mainTechnologies: string
  goodHabits: string[]
  figmaLink: string | null
  repositoryLink: string | null
  productionLink: string | null
}

export interface ProjectsContent {
  heading: string
  projects: ProjectContent[]
  showMoreButtonLabel: string
}

export interface ContactContent {
  heading: string[]
  text: string[]
}

export interface ContentType {
  lang: string
  email: string
  socials: SocialContent[]
  resumeButtonLabel: string
  contactButtonLabel: string
  resumeCv: string
  presentationSection: PresentationContent
  aboutSection: AboutContent
  jobsSection: JobsContent
  projectsSection: ProjectsContent
  contactSection: ContactContent
}

/* eslint-disable camelcase */
export interface PrismicContentDocumentResponse {
  results: {
    uid?: string // lang
    data: {
      email: string
      socials: {
        name: string
        link: string
      }[]
      resume_button_label: string
      resume_pdf: {
        url: string
      }
      presentation_heading: {
        text: string
      }[]
      presentation_text: {
        text: string
      }[]
      contact_button_label: string
      about_heading: string
      about_text: {
        text: string
      }[]
      profile_photo: {
        url: string
        alt: string
      }
      recent_technologies: {
        technology: string
      }[]
      jobs_heading: string
      jobs: {
        company: string
        site_link: {
          url: string
        }
        role: string
        start_date: string
        end_date: string
        activities: {
          text: string
        }[]
      }[]
      projects_heading: string
      projects: {
        thumbnail: {
          url: string
          alt: string
        }
        name: string
        description: {
          text: string
        }[]
        platform: string
        is_responsive: boolean
        main_technologies: string
        good_habits: string
        figma_link: {
          url?: string
        }
        repository_link: {
          url?: string
        }
        production_link: {
          url?: string
        }
      }[]
      show_more_button_label: string
      contact_heading: {
        text: string
      }[]
      contact_text: {
        text: string
      }[]
    }
  }[]
}
