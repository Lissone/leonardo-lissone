import { AppProps } from 'next/app'

import { FixedBorderLed } from '@components/FixedBorderLed'
import { FixedSocials } from '@components/FixedSocials'
import { Header } from '@components/Header'

import { Container, Content } from '@styles/app'
import { GlobalStyle } from '@styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Container>
        <FixedBorderLed />

        <Content>
          <Header />

          <main>
            <FixedSocials />

            <Component {...pageProps} />
          </main>
        </Content>
      </Container>
    </>
  )
}
