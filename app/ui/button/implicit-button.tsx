import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string | null;
};

export default function ImplicitButton({ children, onClick, label }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer font-medium text-(--secondary) text-sm underline hover:text-(--primary) md:text-base"
      aria-label={label || ''}
    >
      {children}
    </button>
  );
}
