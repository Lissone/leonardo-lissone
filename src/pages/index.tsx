import Head from 'next/head'

import { Container } from '@styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lissone Bio</title>
      </Head>

      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  )
}
