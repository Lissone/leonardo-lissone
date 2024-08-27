import * as RadixTooltip from '@radix-ui/react-tooltip'

import { TooltipContent } from './styles'

interface TooltipProps {
  readonly title: string
  readonly children: React.ReactElement<any, any>
}

export function Tooltip({ title, children }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <TooltipContent sideOffset={6} side="top" align="center">
          {title}
          <RadixTooltip.Arrow style={{ fill: 'var(--gray-100)' }} />
        </TooltipContent>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
