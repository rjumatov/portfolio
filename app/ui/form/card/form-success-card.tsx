import type { Form } from '@/app/lib/contentful/generated/sdk';
import ImplicitButton from '@/app/ui/button/implicit-button';
import StatusCard from '@/app/ui/card/status-card';
import { MailOpenIcon } from 'hugeicons-react';

type Props = {
  content?: Form;
  pending: boolean;
  email?: string;
  handleReturn: () => void;
  handleResend: () => void;
  resendAttempts: number;
};

export default function SubmittedStatusCard({
  content,
  pending,
  email,
  handleReturn,
  handleResend,
  resendAttempts,
}: Props) {
  return (
    <StatusCard
      icon={<MailOpenIcon className="size-12 md:size-14" />}
      title={content?.emailVerificationTitle}
      button={{
        label: content?.emailResendButtonLabel,
        onClick: handleResend,
        disabled: resendAttempts <= 0,
        isLoading: pending,
      }}
      attemptsLeft={resendAttempts}
      attemptsLabel={content?.attemptsLabel}
      attemptLabel={content?.attemptLabel}
    >
      <p className="text-center text-sm md:text-base">
        {content?.emailVerificationDescription}
      </p>
      {email && (
        <div className="flex justify-center">
          <ImplicitButton
            onClick={handleReturn}
            label={content?.emailEditAriaLabel}
          >
            {email} {content?.emailEditPrompt}
          </ImplicitButton>
        </div>
      )}
    </StatusCard>
  );
}
