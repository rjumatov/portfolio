import CompactButton from '@/app/ui/button/compact-button';
import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title?: string | null;
  button: {
    label?: string | null;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isLoading?: boolean;
  };
  attemptsLeft: number;
  attemptsLabel?: string | null;
  attemptLabel?: string | null;
};

export default function StatusCard({
  children,
  icon,
  title,
  button,
  attemptsLeft,
  attemptsLabel,
  attemptLabel,
}: Props) {
  return (
    <div className="subtle-border rounded-2xl bg-(--overlay-color) px-8 py-6 shadow-effect sm:px-10 sm:py-8">
      <div className="flex flex-col items-center text-(--highlight)">
        {icon}
        <h5 className="my-2 md:mb-4">{title}</h5>
      </div>
      {children}
      <div className="mt-4 flex justify-center">
        <CompactButton
          onClick={button.onClick}
          disabled={button.disabled}
          isLoading={button.isLoading}
        >
          {button.label}
          <span className="font-medium text-xs">
            ({attemptsLeft} {attemptsLeft === 1 ? attemptLabel : attemptsLabel})
          </span>
        </CompactButton>
      </div>
    </div>
  );
}
