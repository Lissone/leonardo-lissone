import 'aos/dist/aos.css'
import Prismic from '@prismicio/client'
import Aos from 'aos'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import { getPrismicClient } from '@services/prismic'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

interface Content {
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

interface HomeProps {
  contentLangs: {
    [key: string]: Content
  }
}

export default function Home({ contentLangs }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <Container>
        <Presentation />

        <About />

        <WorkExperiences />

        <Projects />

        <Contact />
      </Container>
    </>
  )
}

/* eslint-disable camelcase */

interface PrismicResponse {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response: PrismicResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'content_language')
  ])

  const contentLangs: Content[] = response.results.map(prismicContent => ({
    lang: prismicContent.uid,
    socials: prismicContent.data.socials,
    resumeButtonLabel: prismicContent.data.resume_button_label,
    contactButtonLabel: prismicContent.data.contact_button_label,
    resumeCv: prismicContent.data.resume_pdf.url,
    presentationSection: {
      heading: prismicContent.data.presentation_heading.map(tagData => tagData.text),
      text: prismicContent.data.presentation_text.map(tagData => tagData.text)
    },
    aboutSection: {
      heading: prismicContent.data.about_heading,
      text: prismicContent.data.about_text.map(tagData => tagData.text),
      profilePhoto: {
        url: prismicContent.data.profile_photo.url,
        alt: prismicContent.data.profile_photo.alt
      },
      recentTechnologies: prismicContent.data.recent_technologies.map(
        data => data.technology
      )
    },
    jobsSection: {
      heading: prismicContent.data.jobs_heading,
      jobs: prismicContent.data.jobs.map(jobData => ({
        company: jobData.company,
        role: jobData.role,
        startDate: jobData.start_date,
        endDate: jobData.end_date,
        activities: jobData.activities.map(tagData => tagData.text)
      }))
    },
    projectsSection: {
      heading: prismicContent.data.projects_heading,
      projects: prismicContent.data.projects.map(projectData => ({
        thumbnail: {
          url: projectData.thumbnail.url,
          alt: projectData.thumbnail.alt
        },
        name: projectData.name,
        description: projectData.description.map(tagData => tagData.text),
        platform: projectData.platform,
        isResponsive: projectData.is_responsive,
        mainTechnologies: projectData.main_technologies.split(' '),
        goodHabits: projectData.good_habits.split(' '),
        link: {
          url: projectData.link.url
        }
      }))
    },
    contactSection: {
      heading: prismicContent.data.contact_heading.map(tagData => tagData.text),
      text: prismicContent.data.contact_text.map(tagData => tagData.text)
    }
  }))

  const contentLangsFormatted = {}

  contentLangs.forEach(content => {
    const { lang } = content

    delete content.lang

    contentLangsFormatted[lang] = content
  })

  return {
    props: {
      contentLangs: contentLangsFormatted
    }
  }
}
