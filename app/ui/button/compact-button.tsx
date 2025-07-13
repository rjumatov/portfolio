import type { MouseEventHandler, ReactNode } from 'react';
import LoadingSpinner from '@/app/ui/loading/loading-spinner';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function CompactButton({
  children,
  onClick,
  disabled,
  isLoading,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className="subtle-border hover-effect font-(family-name:--font-geist-mono) overflow-hidden rounded-2xl px-4 py-2 font-bold text-sm backdrop-blur-sm transition-all duration-300"
    >
      <span
        className={`flex flex-col items-center justify-center gap-2 duration-500 sm:flex-row ${isLoading ? 'text-transparent' : ''}`}
      >
        {children}
      </span>
      <span hidden={!isLoading} className="-translate-1/2 absolute top-1/2">
        <LoadingSpinner size={24} />
      </span>
    </button>
  );
}
