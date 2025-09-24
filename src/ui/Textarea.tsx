import { useId, type ComponentPropsWithRef, forwardRef, type Ref } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'textarea'>;

function TextareaWithRef({ label, error, ...rest }: Props, ref: Ref<HTMLTextAreaElement>) {
  const id = useId();

  return (
    <div className='relative lg:col-span-2'>
      <label htmlFor={id} className='hidden'>
        {label}
      </label>

      <textarea
        className='w-full resize-none border border-aag-gray bg-aag-gray px-6 py-3 placeholder-black outline-none focus:border-black lg:text-sm'
        rows={4}
        id={id}
        ref={ref}
        autoComplete='off'
        placeholder={label}
        {...rest}
      />

      {error && <p className='absolute -bottom-3 left-0 text-xs text-red-500'>{error.message}</p>}
    </div>
  );
}

export const Textarea = forwardRef(TextareaWithRef);
