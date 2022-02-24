import { AppProps } from 'next/app'

import { FixedBorderLed } from '@components/FixedBorderLed'
import { FixedSocials } from '@components/FixedSocials'

import { Container, Content } from '@styles/app'
import { GlobalStyle } from '@styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Container>
        <FixedBorderLed />

        <Content>
          <FixedSocials />

          <Component {...pageProps} />
        </Content>
      </Container>
    </>
  )
}
