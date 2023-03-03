import { AppProps } from 'next/app'
import { useState } from 'react'

import { FixedBorderLed } from '@components/FixedBorderLed'

import { Container, Content } from '@styles/app'
import { GlobalOverlay, GlobalStyle } from '@styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isOverlayActive, setIsOverlayActive] = useState(false)

  return (
    <>
      <GlobalStyle />

      <Container>
        <GlobalOverlay isActive={isOverlayActive} />
        <FixedBorderLed />

        <Content>
          <Component {...pageProps} setIsOverlayActive={setIsOverlayActive} />
        </Content>
      </Container>
    </>
  )
}
