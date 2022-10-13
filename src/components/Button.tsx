import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp 
      className={clsx(
        'text-gray-900 text-sm font-semibold w-full rounded transition-all ease-in-out bg-cyan-500 px-4 py-3 hover:bg-cyan-300 duration-300'
      )}
    >
      {children}
    </Comp>
  )
}