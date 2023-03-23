import { ReactNode } from 'react'

import { MenuLink } from './styles'

interface NavLinkProps {
  readonly to: string
  readonly children: ReactNode
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <MenuLink to={to} smooth duration={1000} spy offset={-90}>
      {children}
    </MenuLink>
  )
}
