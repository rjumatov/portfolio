import { CancelCircleIcon } from 'hugeicons-react';
import type { Form } from '@/app/lib/contentful/generated/sdk';
import ImplicitButton from '@/app/ui/button/implicit-button';
import StatusCard from '@/app/ui/card/status-card';
import MailLink from '@/app/ui/link/mail-link';

type Props = {
  content?: Form;
  handleReturn: () => void;
  handleRetry: () => void;
  retryAttempts: number;
};

export default function FormErrorCard({
  content,
  handleReturn,
  handleRetry,
  retryAttempts,
}: Props) {
  return (
    <StatusCard
      icon={<CancelCircleIcon className="size-12 md:size-14" />}
      title={content?.errorTitle}
      button={{
        label: content?.errorButtonLabel,
        onClick: handleRetry,
        disabled: retryAttempts <= 0,
      }}
      attemptsLeft={retryAttempts}
      attemptsLabel={content?.attemptsLabel}
      attemptLabel={content?.attemptLabel}
    >
      <p className="text-center text-sm md:text-base">
        {content?.errorIntro}{' '}
        <ImplicitButton
          onClick={handleReturn}
          label={content?.errorEditAriaLabel}
        >
          {content?.errorEditPrompt}
        </ImplicitButton>{' '}
        {content?.errorDescription}{' '}
        <MailLink mail={content?.errorContactEmail} />.
      </p>
    </StatusCard>
  );
}
