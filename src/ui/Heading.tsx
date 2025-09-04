import type { ReactNode } from 'react';
import clsx from 'clsx';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: ReactNode;
};

export function Heading({ as: Comp = 'h1', size = 'lg', children, className }: HeadingProps) {
  return (
    <Comp
      className={clsx(
        'font-normal leading-tight tracking-tight md:leading-tight',
        size === 'xl' && 'font-serif text-5xl md:text-7xl',
        size === 'lg' && 'font-serif text-4xl md:text-5xl',
        size === 'md' && 'text-3xl md:text-4xl',
        size === 'sm' && 'text-base md:text-sm uppercase',
        size === 'xs' && 'text-sm md:text-xs uppercase',
        className,
      )}
    >
      {children}
    </Comp>
  );
}
