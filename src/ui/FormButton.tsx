import { Loader } from '@/ui';

type Props = {
  label: string;
  pending?: boolean;
};

export function FormButton({ label, pending }: Props) {
  return (
    <button
      className={`
        relative bg-aag-gray px-14 pt-4 pb-3 text-sm font-bold uppercase 
        tracking-wide text-aag-black outline-none transition-all
        ${pending ? '' : 'hover:bg-aag-black hover:text-white'} 
        lg:text-xs
      `}
    >
      <span className={pending ? 'opacity-0' : ''}>{label}</span>
      {pending ? <Loader /> : ''}
    </button>
  );
}
