import { z } from 'zod';

export const validationSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Podaj imię' })
    .max(20, { message: 'Max 20 znaków' }),
  surname: z
    .string()
    .min(2, { message: 'Podaj nazwisko' })
    .max(20, { message: 'Max 20 znaków' }),
  phone: z
    .string()
    .min(6, { message: 'Podaj prawidłowy numer' })
    .max(10, { message: 'Max 10 znaków' }),
  email: z.string().email({ message: 'Podaj prawidłowy numer' }),
  message: z
    .string()
    .min(5, { message: 'Wpisz wiadomość' })
    .max(350, { message: 'Max 350 znaków' }),
});

export type RegistrationFormData = z.infer<typeof validationSchema>;
