import * as RadixTooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'

import { TooltipContent } from './styles'

interface TooltipProps {
  readonly title: string
  readonly children: React.ReactElement<any, any>
}

export function Tooltip({ title, children }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root open={open}>
        <RadixTooltip.Trigger
          asChild
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {children}
        </RadixTooltip.Trigger>

        <TooltipContent sideOffset={6} side="top" align="center">
          {title}
          <RadixTooltip.Arrow style={{ fill: 'var(--gray-100)' }} />
        </TooltipContent>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
