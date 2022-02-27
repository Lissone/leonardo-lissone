import { BsInstagram } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

interface SocialIconProps {
  name: string
}

export function SocialIcon({ name }: SocialIconProps) {
  switch (name) {
    case 'Github':
      return <FiGithub size={30} />
    case 'Linkedin':
      return <FiLinkedin size={30} />
    case 'Instagram':
      return <BsInstagram size={29} />
    default:
      return null
  }
}
