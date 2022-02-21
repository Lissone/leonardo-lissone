import 'aos/dist/aos.css'
import Aos from 'aos'
import Head from 'next/head'
import { useEffect } from 'react'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

export default function Home() {
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
