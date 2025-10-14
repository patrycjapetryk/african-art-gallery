'use client';

import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type RegistrationFormData, validationSchema } from './types';
import { sendEmail } from '@/utils/send-email';
import { FormButton, FormMessage, Textarea, Input } from '@/ui';

export function Form() {
  const [response, setResponse] = useState('');
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    setPending(true);
    const res = await sendEmail(data);
    setResponse(res);
    setTimeout(() => setResponse(''), 5000);

    if (res) {
      setPending(false);
    }
  };

  return (
    <form
      className='w-full max-w-[480px] grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-4'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input label={'Imię'} {...register('name')} error={errors.name} />
      <Input label={'Nazwisko'} {...register('surname')} error={errors.surname} />
      <Input label={'Mail'} type='email' {...register('email')} error={errors.email} />
      <Input label={'Telefon'} {...register('phone')} error={errors.phone} />
      <Textarea label='Treść wiadomości' {...register('message')} error={errors.message} />

      <div className='flex justify-end lg:col-span-2'>
        <FormButton label='Wyślij' pending={pending} />
      </div>

      {response && <FormMessage message={response} />}
    </form>
  );
}
