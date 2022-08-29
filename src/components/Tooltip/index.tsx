import MaterialUITooltip from '@material-ui/core/Tooltip'

interface TooltipProps {
  title: string
  children: React.ReactElement<any, any>
}

export function Tooltip({ title, children }: TooltipProps) {
  return (
    <MaterialUITooltip title={title} placement="top" arrow>
      {children}
    </MaterialUITooltip>
  )
}
