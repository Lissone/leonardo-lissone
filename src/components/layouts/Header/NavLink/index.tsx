import { ReactNode } from 'react';

import { Tooltip } from '@components/shared/Tooltip';

import { MenuLink } from './styles';

interface NavLinkProps {
  readonly to: string;
  readonly tooltip: string;
  readonly children: ReactNode;
  readonly showTooltip?: boolean;
}

export function NavLink({ to, tooltip, children, showTooltip = true }: NavLinkProps) {
  return (
    <Tooltip title={tooltip} show={showTooltip}>
      <div>
        <MenuLink to={to} smooth duration={1000} spy offset={-90} className='menuLink'>
          {children}
        </MenuLink>
      </div>
    </Tooltip>
  );
}
