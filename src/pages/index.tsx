import 'aos/dist/aos.css'
import Aos from 'aos'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { ContentLanguage } from '@interfaces/content'

import { api } from '@services/api'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { FixedSocials } from '@components/FixedSocials'
import { Header } from '@components/Header'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

interface HomeProps {
  readonly contentLangs: ContentLangsFormatted
  readonly setIsOverlayActive: (value: boolean) => void
}

interface ContentLangsFormatted {
  [key: string]: ContentLanguage
}

export default function Home({ contentLangs, setIsOverlayActive }: HomeProps) {
  const [content, setContent] = useState(contentLangs['pt-br'])

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const toggleContentLanguage = () => {
    setContent(content.lang === 'pt-br' ? contentLangs['en-us'] : contentLangs['pt-br'])
  }

  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <FixedSocials socials={content.socials} />

      <Header
        language={content.lang}
        resumeCv={content.sharedButtons.resumeCv}
        resumeButtonLabel={content.sharedButtons.resumeButtonLabel}
        toggleContentLanguage={toggleContentLanguage}
        setIsOverlayActive={setIsOverlayActive}
      />

      <Container>
        <Presentation
          content={content.presentationSection}
          contactButtonLabel={content.sharedButtons.contactButtonLabel}
        />

        <About content={content.aboutSection} />

        <WorkExperiences content={content.jobsSection} />

        <Projects content={content.projectsSection} />

        <Contact
          content={content.contactSection}
          socials={content.socials}
          email={content.email}
          contactButtonLabel={content.sharedButtons.contactButtonLabel}
        />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<ContentLanguage[]>(
    'content-languages'
    // , {
    //   params: {
    //     _order: 'desc'
    //   }
    // }
  )

  const contentLangsFormatted = {} as ContentLangsFormatted
  data.forEach(content => {
    const { lang } = content
    contentLangsFormatted[lang] = content
  })

  return {
    props: {
      contentLangs: contentLangsFormatted
    }
  }
}
