import contentfulClient from '@/app/lib/contentful/client';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import ArrowItem from '@/app/ui/footer/arrow-item';
import ExternalLink from '@/app/ui/link/external-link';
import MailLink from '@/app/ui/link/mail-link';
import TitledSection from '@/app/ui/section/titled-section';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const query = await contentfulClient.privacyMetadataContent({ locale });
  const metadata = query.metadataCollection?.items[0];
  return {
    title: metadata?.privacyTitle,
    description: metadata?.privacyDescription,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.privacyPolicyContent({ locale });
  const content = query.privacyPolicyCollection?.items[0];

  return (
    <div className="py-24 md:py-32">
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-2 hyphens-auto font-bold text-(--highlight) uppercase tracking-wide">
          {content?.title}
        </h3>
        <p className="mb-8 text-(--secondary) italic">
          {content?.lastModified}
        </p>
        <article className="mb-12">
          <h4 className="mb-8">{content?.privacyOverview?.title}</h4>

          <TitledSection title={content?.privacyOverview?.generalInfoTitle}>
            <p className="text-(--secondary)">
              {content?.privacyOverview?.generalInfoDescription}
            </p>
          </TitledSection>

          <TitledSection title={content?.privacyOverview?.dataCollectionTitle}>
            <h5 className="mb-2 font-semibold text-base">
              {content?.privacyOverview?.responsiblePartyTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.responsiblePartyDescription}
            </p>

            <h5 className="mb-2 font-semibold text-base">
              {content?.privacyOverview?.dataCaptureTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataDirectCaptureText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataAutomaticCaptureText}
            </p>

            <h5 className="mb-2 font-semibold text-base">
              {content?.privacyOverview?.dataPurposeTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataPurposeDescription}
            </p>

            <h5 className="mb-2 font-semibold text-base">
              {content?.privacyOverview?.userRightsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsIntroText}
            </p>
            <ul className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsList?.map((item) => (
                <ArrowItem key={item}>{item}</ArrowItem>
              ))}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsContactText}
            </p>

            <h5 className="mb-2 font-semibold text-base">
              {content?.privacyOverview?.analysisToolsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsIntroText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsDetailsText}
            </p>
          </TitledSection>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.hosting?.title}</h4>

          <TitledSection title={content?.hosting?.vercelTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.vercelHostingInfo}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.vercelDataProcessing}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.vercelContractualClauses}{' '}
              <ExternalLink
                href={content?.hosting?.vercelContractualClausesLink}
                highlight
              />
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.vercelDataProcessingAgreement}{' '}
              <ExternalLink
                href={content?.hosting?.vercelDataProcessingAgreementLink}
                highlight
              />
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.vercelPrivacyPolicy}{' '}
              <ExternalLink
                href={content?.hosting?.vercelPrivacyPolicyLink}
                highlight
              />
              .
            </p>
          </TitledSection>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.notesAndLegalInformation?.title}</h4>

          <TitledSection
            title={content?.notesAndLegalInformation?.dataProtectionTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionNotice}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.responsiblePartyTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyIntro}
            </p>
            <address className="mb-2 text-(--secondary) not-italic">
              <p className="font-extrabold">
                {content?.notesAndLegalInformation?.responsiblePartyName}
              </p>
              <p>{content?.notesAndLegalInformation?.responsiblePartyRole}</p>
              <p>{content?.notesAndLegalInformation?.responsiblePartyStreet}</p>
              <p>
                {content?.notesAndLegalInformation?.responsiblePartyPostalCode}{' '}
                {content?.notesAndLegalInformation?.responsiblePartyCity}
              </p>
            </address>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyEmailLabel}{' '}
              <MailLink
                mail={content?.notesAndLegalInformation?.responsiblePartyEmail}
              />
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyInfo}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.dataStorageDurationTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataStorageDurationDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.legalBasisTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisIntro}
            </p>
            <ul className="text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <ArrowItem key={item}>
                      <div>
                        <span className="font-bold">{boldText}:</span>{' '}
                        {normalText}
                      </div>
                    </ArrowItem>
                  );
                })}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.userRightsTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.userRightsIntro}
            </p>
            <ul>
              {content?.notesAndLegalInformation?.userRightsList?.map(
                (item) => (
                  <ArrowItem key={item}>{item}</ArrowItem>
                ),
              )}
            </ul>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.complaintRightTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.complaintRightDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.sslTlsEncryptionTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionDetails}
            </p>
          </TitledSection>
        </article>

        <article>
          <h4 className="mb-8">{content?.dataCollection?.title}</h4>

          <TitledSection title={content?.dataCollection?.vercelTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.vercelIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.vercelDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.vercelPrivacyPolicy}{' '}
              <ExternalLink
                href={content?.dataCollection?.vercelPrivacyPolicyLink}
                highlight
              />
              .
            </p>
          </TitledSection>

          <TitledSection title={content?.dataCollection?.contactFormTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabase}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabasePrivacyPolicy}{' '}
              <ExternalLink
                href={
                  content?.dataCollection?.contactFormSupabasePrivacyPolicyLink
                }
                highlight
              />
              .
            </p>
            <h5 className="mb-2 font-semibold text-base">
              {content?.dataCollection?.legalBasisTitle}
            </h5>
            <ul className="text-(--secondary)">
              {content?.dataCollection?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <ArrowItem key={item}>
                      <div>
                        <span className="font-bold">{boldText}:</span>{' '}
                        {normalText}
                      </div>
                    </ArrowItem>
                  );
                })}
            </ul>

            <h5 className="mb-2 font-semibold text-base">
              {content?.dataCollection?.storageDurationTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.storageDurationDetails}
            </p>
          </TitledSection>
        </article>
      </RevealAnimation>
    </div>
  );
}
