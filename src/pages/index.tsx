import Head from 'next/head'

import { About } from '@components/About'
import { Presentation } from '@components/Presentation'

import { Container } from '@styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lissone Bio</title>
      </Head>

      <Container>
        <Presentation />

        <About />
      </Container>
    </>
  )
}
