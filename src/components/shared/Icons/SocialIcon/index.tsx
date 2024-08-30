import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';

interface SocialIconProps {
  readonly name: string;
}

export function SocialIcon({ name }: SocialIconProps) {
  switch (name) {
    case 'Github': {
      return <BsGithub size={30} />;
    }
    case 'Figma': {
      return <IoLogoFigma size={30} />;
    }
    case 'Linkedin': {
      return <FaLinkedinIn size={30} />;
    }
    case 'Instagram': {
      return <BsInstagram size={29} />;
    }
    default: {
      return null;
    }
  }
}
