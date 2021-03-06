import 'aos/dist/aos.css'
import Prismic from '@prismicio/client'
import Aos from 'aos'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { useEffect, useState } from 'react'

import { ContentType, PrismicContentDocumentResponse } from '@type/content'

import { getPrismicClient } from '@services/prismic'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { FixedSocials } from '@components/FixedSocials'
import { Header } from '@components/Header'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

interface HomeProps {
  contentLangs: {
    [key: string]: ContentType
  }
}

export default function Home({ contentLangs }: HomeProps) {
  const [contentLanguage, setContentLanguage] = useState(contentLangs['pt-br'])

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  function toggleContentLanguage() {
    setContentLanguage(
      contentLanguage.lang === 'pt-br' ? contentLangs['en-us'] : contentLangs['pt-br']
    )
  }

  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <FixedSocials socials={contentLanguage.socials} />

      <Header
        language={contentLanguage.lang}
        resumeButtonLabel={contentLanguage.resumeButtonLabel}
        resumeCv={contentLanguage.resumeCv}
        toggleContentLanguage={toggleContentLanguage}
      />

      <Container>
        <Presentation
          presentationContent={contentLanguage.presentationSection}
          contactButtonLabel={contentLanguage.contactButtonLabel}
        />

        <About aboutContent={contentLanguage.aboutSection} />

        <WorkExperiences workExperiencesContent={contentLanguage.jobsSection} />

        <Projects projectsContent={contentLanguage.projectsSection} />

        <Contact
          contactContent={contentLanguage.contactSection}
          contactButtonLabel={contentLanguage.contactButtonLabel}
          socials={contentLanguage.socials}
          email={contentLanguage.email}
        />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response: PrismicContentDocumentResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'content_language')
  ])

  const contentLangs: ContentType[] = response.results.map(prismicContent => ({
    lang: prismicContent.uid,
    email: prismicContent.data.email,
    socials: prismicContent.data.socials,
    resumeButtonLabel: prismicContent.data.resume_button_label,
    contactButtonLabel: prismicContent.data.contact_button_label,
    resumeCv: prismicContent.data.resume_pdf.url,
    presentationSection: {
      heading: prismicContent.data.presentation_heading.map(tagData => tagData.text),
      text: RichText.asHtml(prismicContent.data.presentation_text)
    },
    aboutSection: {
      heading: prismicContent.data.about_heading,
      text: RichText.asHtml(prismicContent.data.about_text),
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
      jobs: [...new Set(prismicContent.data.jobs.map(job => job.company))].map(x => ({
        company: x,
        experiences: prismicContent.data.jobs
          .filter(d => d.company === x)
          .map(job => ({
            company: job.company,
            siteLink: job.site_link.url,
            role: job.role,
            startDate: job.start_date,
            endDate: job.end_date,
            activities: job.activities.map(tagData => tagData.text)
          }))
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
        mainTechnologies: projectData.main_technologies.split(' ').join(',  '),
        goodHabits: projectData.good_habits?.split(' ') ?? [],
        figmaLink: projectData.figma_link.url ?? null,
        repositoryLink: projectData.repository_link.url ?? null,
        productionLink: projectData.production_link.url ?? null
      })),
      showMoreButtonLabel: prismicContent.data.show_more_button_label
    },
    contactSection: {
      heading: prismicContent.data.contact_heading.map(tagData => tagData.text),
      text: prismicContent.data.contact_text.map(tagData => tagData.text)
    }
  }))

  const contentLangsFormatted = {}

  contentLangs.forEach(content => {
    const { lang } = content

    contentLangsFormatted[lang] = content
  })

  return {
    props: {
      contentLangs: contentLangsFormatted
    }
  }
}
