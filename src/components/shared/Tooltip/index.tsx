import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipContent } from './styles';

interface TooltipProps {
  readonly title: string;
  readonly children: React.ReactElement<any, any>;
  readonly show?: boolean;
}

export function Tooltip({ title, children, show = true }: TooltipProps) {
  if (show) {
    return (
      <RadixTooltip.Provider delayDuration={200}>
        <RadixTooltip.Root>
          <RadixTooltip.Trigger asChild>
            {children}
          </RadixTooltip.Trigger>

          <RadixTooltip.Portal>
            <TooltipContent sideOffset={6} side="top" align="center">
              {title}
              <RadixTooltip.Arrow style={{ fill: 'var(--gray-100)' }} />
            </TooltipContent>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  }

  return children;
}
