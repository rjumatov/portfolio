import { z } from 'zod';

export enum ValidationMessages {
  nameRequired = 'nameRequired',
  nameMaxLength = 'nameMaxLength',
  emailInvalid = 'emailInvalid',
  emailMaxLength = 'emailMaxLength',
  roleMaxLength = 'roleMaxLength',
  projectDetailsRequired = 'projectDetailsRequired',
  projectDetailsInvalid = 'projectDetailsInvalid',
  projectDetailsMaxLength = 'projectDetailsMaxLength',
  consentRequired = 'consentRequired',
}

export type ValidationMessageKey = keyof typeof ValidationMessages;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, ValidationMessages.nameRequired)
    .max(100, ValidationMessages.nameMaxLength),
  email: z
    .email(ValidationMessages.emailInvalid)
    .max(100, ValidationMessages.emailMaxLength),
  role: z.string().max(150, ValidationMessages.roleMaxLength).optional(),
  projectDetails: z
    .string()
    .min(1, ValidationMessages.projectDetailsRequired)
    .max(1000, ValidationMessages.projectDetailsMaxLength)
    .refine(
      (val) => {
        const v = val.trim();
        if (/^[A-Za-z0-9]+$/.test(v)) return false; // pure gibberish
        if (v.split(/\s+/).length < 3) return false; // too few words
        if (/(.)\1{5,}/.test(v)) return false; // too much repetition
        return true;
      },
      {
        message: ValidationMessages.projectDetailsInvalid,
      },
    ),
  consent: z.boolean().refine((val) => val, {
    message: ValidationMessages.consentRequired,
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
