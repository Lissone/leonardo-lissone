import Head from 'next/head'

import { About } from '@components/About'
import { Presentation } from '@components/Presentation'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <Container>
        <Presentation />

        <About />

        <WorkExperiences />
      </Container>
    </>
  )
}
