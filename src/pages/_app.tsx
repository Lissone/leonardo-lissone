import { AppProps } from 'next/app'

import { FixedBorderLed } from '@components/FixedBorderLed'

import { Container, Content } from '@styles/app'
import { GlobalStyle } from '@styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Container>
        <FixedBorderLed />

        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
    </>
  )
}
