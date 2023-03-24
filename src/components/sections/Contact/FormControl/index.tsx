import { FieldError } from 'react-hook-form'

import { Container, FormLabel, ErrorMessage } from './styles'

interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly name: string
  readonly children: JSX.Element
  readonly label?: string
  readonly error?: FieldError | null
}

export function FormControl({ name, children, label, error = null }: FormControlProps) {
  const isInvalid = !!error
  return (
    <Container isInvalid={isInvalid}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

      {children}

      {isInvalid ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </Container>
  )
}
