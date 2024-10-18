import { yupResolver } from '@hookform/resolvers/yup';
import { send as emailJsSend } from 'emailjs-com';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiSend } from 'react-icons/bi';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { SendMessageModalContentValidationInput } from '@interfaces/content';

import { useData } from '@contexts/DataContext';

import { Loader } from '@components/shared/Loader';
import { Modal } from '@components/shared/Modal';

import { ButtonSubmit, Content, Form } from './styles';
import { FormControl } from '../FormControl';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

type FormValuesType = {
  readonly name: string;
  readonly email: string;
  readonly message: string;
};

interface SendMessageModalProps {
  readonly isOpen: boolean;
  readonly handleClose: () => void;
}

export function SendMessageModal({ isOpen, handleClose }: SendMessageModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data } = useData();
  const {
    title, text, buttonSendMessage,
    validationInput, input,
    emailMessageSuccess, emailMessageError,
  } = data.contactSection.sendMessageModalContent;

  const { register, handleSubmit, reset, formState } = useForm<FormValuesType>({
    resolver: yupResolver(getSchema(validationInput)),
  });

  const onSubmit: SubmitHandler<FormValuesType> = async (formValues) => {
    setIsSubmitting(true);
    try {
      await emailJsSend(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formValues,
        EMAILJS_PUBLIC_KEY,
      );

      reset();
      handleClose();
      toast.success(emailMessageSuccess);
    } catch {
      toast.error(emailMessageError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      headerIcon={<IoPaperPlaneOutline size={24} />}
      handleClose={handleClose}
    >
      <Content>
        <span>{text}</span>

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
            {buttonSendMessage}
            {isSubmitting ? <Loader /> : <BiSend size={18} />}
          </ButtonSubmit>
        </Form>
      </Content>
    </Modal>
  );
}

const getSchema = (
  validationInput: SendMessageModalContentValidationInput,
) => yup.object().shape({
  name: yup.string().required(validationInput.nameRequiredLabel),
  email: yup
    .string()
    .required(validationInput.emailRequiredLabel)
    .email(validationInput.emailInvalidLabel),
  message: yup
    .string()
    .required(validationInput.messageRequiredLabel)
    .min(20, validationInput.messageMinLabel),
});
