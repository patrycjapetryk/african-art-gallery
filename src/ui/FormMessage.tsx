type Props = {
  message: string;
};

export function FormMessage({ message }: Props) {
  return (
    <div className='fixed bottom-8 left-0 z-10 flex w-full animate-fade-in justify-center'>
      <p className='mx-6 border-2 bg-aag-gray px-8 py-3 text-center text-sm'>{message}</p>
    </div>
  );
}
