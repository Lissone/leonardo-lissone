import { yupResolver } from '@hookform/resolvers/yup'
import { CircularProgress } from '@material-ui/core'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiSend } from 'react-icons/bi'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { SendMessageModalContent } from '@interfaces/content'

import { Modal } from '@components/shared/Modal'

import { FormControl } from '../FormControl'
import { Content, Form, ButtonSubmit } from './styles'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

type FormValuesType = {
  readonly name: string
  readonly email: string
  readonly message: string
}

interface SendMessageModalProps {
  readonly isOpen: boolean
  readonly content: SendMessageModalContent
  readonly handleClose: () => void
}

export function SendMessageModal({
  isOpen,
  content,
  handleClose
}: SendMessageModalProps) {
  const { validationInput, input } = content

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup.string().required(validationInput.nameRequiredLabel),
    email: yup
      .string()
      .required(validationInput.emailRequiredLabel)
      .email(validationInput.emailInvalidLabel),
    message: yup
      .string()
      .required(validationInput.messageRequiredLabel)
      .min(20, validationInput.messageMinLabel)
  })

  const { register, handleSubmit, reset, formState } = useForm<FormValuesType>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<FormValuesType> = async formValues => {
    setIsSubmitting(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formValues,
        EMAILJS_PUBLIC_KEY
      )

      reset()
      handleClose()
      toast.success(content.emailMessageSuccess)
    } catch (err) {
      toast.error(content.emailMessageError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      title={content.title}
      headerIcon={<img src="/icons/paper-plane.svg" alt="Paper plane icon" />}
      handleClose={handleClose}
    >
      <Content>
        <span>{content.text}</span>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl name="name" label={input.name.label} error={formState.errors.name}>
            <input
              id="input-name"
              type="text"
              placeholder={input.name.placeholder}
              {...register('name')}
            />
          </FormControl>

          <FormControl
            name="email"
            label={input.email.label}
            error={formState.errors.email}
          >
            <input
              id="input-email"
              type="text"
              placeholder={input.email.placeholder}
              {...register('email')}
            />
          </FormControl>

          <FormControl
            name="message"
            label={input.message.label}
            error={formState.errors.message}
          >
            <textarea
              id="textarea-message"
              rows={6}
              placeholder={input.message.placeholder}
              {...register('message')}
            />
          </FormControl>

          <ButtonSubmit type="submit" disabled={isSubmitting}>
            <div />
            {content.buttonSendMessage}
            {isSubmitting ? (
              <CircularProgress size={18} className="circularProgress" />
            ) : (
              <BiSend size={18} />
            )}
          </ButtonSubmit>
        </Form>
      </Content>
    </Modal>
  )
}
