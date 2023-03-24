import { IoMdClose } from 'react-icons/io'
import ReactModal from 'react-modal'

import { HeaderContainer, HeaderContent, Heading } from './styles'

interface ModalProps {
  readonly isOpen: boolean
  readonly title: string
  readonly headerIcon: JSX.Element
  readonly children: JSX.Element
  readonly handleClose: () => void
}

export function Modal({ isOpen, title, headerIcon, children, handleClose }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-container"
    >
      <HeaderContainer>
        <HeaderContent>
          <Heading>
            {headerIcon}
            <h1>{title}</h1>
          </Heading>

          <button type="button" onClick={handleClose}>
            <IoMdClose size={30} />
          </button>
        </HeaderContent>
        <div className="header-divider" />
      </HeaderContainer>

      {children}
    </ReactModal>
  )
}
