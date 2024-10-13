import { AppProps } from 'next/app';
import { useState } from 'react';
import Modal from 'react-modal';
import { Slide, ToastContainer } from 'react-toastify';

import { Providers } from '@contexts/Providers';

import { Container } from '@styles/app';
import { GlobalOverlay, GlobalStyle } from '@styles/global';

Modal.setAppElement('#__next');

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  return (
    <Providers>
      <GlobalStyle />

      <Container>
        <GlobalOverlay $isActive={isOverlayActive} />

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          transition={Slide}
          pauseOnHover={false}
          closeOnClick
          rtl={false}
          theme="dark"
        />

        <Component {...pageProps} setIsOverlayActive={setIsOverlayActive} />
      </Container>
    </Providers>
  );
}
