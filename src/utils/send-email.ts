import { type RegistrationFormData } from '@/slices/ContactForm/types';

const errorMessage = 'Nie udało się wysłać wiadomości. Spróbuj ponownie.';

export async function sendEmail(data: RegistrationFormData) {
  const apiEndpoint = '/api/email';

  const emailResponse = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const res = await emailResponse.json();

  return res.message ? res.message : errorMessage;
}
