import { useId, type ComponentPropsWithRef, forwardRef, type Ref } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<'input'>;

function InputWithRef({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) {
  const id = useId();

  return (
    <div className='relative'>
      <label htmlFor={id} className='hidden'>
        {label}
      </label>
      <input
        className='w-full border border-aag-gray bg-aag-gray px-6 py-3 font-medium text-aag-black placeholder-black outline-none focus:border-aag-black lg:text-sm'
        id={id}
        ref={ref}
        placeholder={label}
        autoComplete='on'
        {...rest}
      />
      {error && <p className='absolute -bottom-5 left-0 text-xs text-red-500'>{error.message}</p>}
    </div>
  );
}

export const Input = forwardRef(InputWithRef);
