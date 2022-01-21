import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
    179.96deg,
    rgba(49, 49, 49, 0.1) 38.91%,
    rgba(202, 62, 71, 0.5) 99.97%
  );

  .bearing-led {
    height: 44rem;

    position: absolute;
    bottom: -12rem;

    transform: rotateZ(90deg);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;

    color: var(--red-400);
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Text = styled.p`
  max-width: 60%;
  margin-top: 0.8rem;

  font-size: 1.2rem;

  text-align: center;
`

export const ContactButton = styled.a`
  margin-top: 4rem;
  padding: 0.8rem 4.2rem;

  font-size: 1.2rem;

  border: 1px solid var(--red-400);
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.875rem rgba(202, 62, 71, 0.7);

  color: var(--gray-300);
  background: var(--gray-900-opacity-80);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.03);
  }
`

// export const ImageContainer = styled.div`
//   position: relative;

//   display: flex;
//   align-items: center;

//   img {
//     position: absolute;
//     height: 38rem;

//     transform: rotateZ(90deg);
//   }
// `
