import Head from 'next/head'

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
      </Container>
    </>
  )
}
