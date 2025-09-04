import { type ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
};

export default function Button({ variant = 'primary', className, children }: ButtonProps) {
  return (
    <span
      className={clsx(
        'px-7 py-3 text-xs text-white border border-aag-black uppercase transition',
        variant === 'primary' && 'bg-aag-black hover:text-aag-black hover:bg-transparent',
        variant === 'secondary' &&
          'border-white bg-transparent hover:text-aag-black hover:bg-white',
        className,
      )}
    >
      {children}
    </span>
  );
}
