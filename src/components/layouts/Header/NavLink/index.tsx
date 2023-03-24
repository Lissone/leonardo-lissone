import { ReactNode } from 'react'

import { Tooltip } from '@components/shared/Tooltip'

import { MenuLink } from './styles'

interface NavLinkProps {
  readonly to: string
  readonly tooltip: string
  readonly children: ReactNode
}

export function NavLink({ to, tooltip, children }: NavLinkProps) {
  return (
    <Tooltip title={tooltip}>
      <MenuLink to={to} smooth duration={1000} spy offset={-90}>
        {children}
      </MenuLink>
    </Tooltip>
  )
}
