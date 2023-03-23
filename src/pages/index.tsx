import 'aos/dist/aos.css'
import Aos from 'aos'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { FixedSocials } from '@components/layouts/FixedSocials'
import { Header } from '@components/layouts/Header'
import { About } from '@components/sections/About'
import { Contact } from '@components/sections/Contact'
import { Presentation } from '@components/sections/Presentation'
import { Projects } from '@components/sections/Projects'
import { WorkExperiences } from '@components/sections/WorkExperiences'

import { contentLanguages } from '@shared/db'

import { Container } from '@styles/home'

interface HomeProps {
  readonly setIsOverlayActive: (value: boolean) => void
}

export default function Home({ setIsOverlayActive }: HomeProps) {
  const [content, setContent] = useState(contentLanguages['pt-br'])

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const toggleContentLanguage = () => {
    setContent(
      content.lang === 'pt-br' ? contentLanguages['en-us'] : contentLanguages['pt-br']
    )
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
