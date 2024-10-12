import { ReactNode } from 'react';

import { Tooltip } from '@components/shared/Tooltip';

import { Label, MenuLink } from './styles';

interface NavLinkProps {
  readonly to: string;
  readonly tooltip: string;
  readonly children: ReactNode;
  readonly hasLabel?: boolean;
}

export function NavLink({ to, tooltip, children, hasLabel = false }: NavLinkProps) {
  return (
    <Tooltip title={tooltip} show={!hasLabel}>
      <div>
        <MenuLink to={to} smooth duration={1000} spy offset={-90} className='menuLink'>
          {children}
          {hasLabel ? <Label>{tooltip}</Label> : null}
        </MenuLink>
      </div>
    </Tooltip>
  );
}
