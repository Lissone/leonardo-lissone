export interface ContentType {
  lang: string
  socials: {
    name: string
    link: string
  }[]
  resumeButtonLabel: string
  contactButtonLabel: string
  resumeCv: string
  presentationSection: {
    heading: string[]
    text: string[]
  }
  aboutSection: {
    heading: string
    text: string[]
    profilePhoto: {
      url: string
      alt: string
    }
    recentTechnologies: string[]
  }
  jobsSection: {
    heading: string
    jobs: {
      company: string
      role: string
      startDate: string
      endDate: string
      activities: string[]
    }[]
  }
  projectsSection: {
    heading: string
    projects: {
      thumbnail: {
        url: string
        alt: string
      }
      name: string
      description: string[]
      platform: string
      isResponsive: boolean
      mainTechnologies: string[]
      goodHabits: string[]
      link: {
        url: string
      }
    }[]
  }
  contactSection: {
    heading: string[]
    text: string[]
  }
}

/* eslint-disable camelcase */

export interface PrismicContentDocumentResponse {
  results: {
    uid?: string // lang
    data: {
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
        link: {
          url: string
        }
      }[]
      contact_heading: {
        text: string
      }[]
      contact_text: {
        text: string
      }[]
    }
  }[]
}
