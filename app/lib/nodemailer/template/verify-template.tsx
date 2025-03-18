import contentfulClient from '@/app/lib/contentful/client';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type { Locale } from 'next-intl';

type Props = {
  locale: Locale;
  name: string;
  verifyUrl: string;
};

export default async function VerifyTemplate({
  locale,
  name,
  verifyUrl,
}: Props) {
  const query = await contentfulClient.emailContent({ locale });
  const content = query.emailCollection?.items[0];

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              highlight: '#FE5100',
            },
          },
        },
      }}
    >
      <Html lang={locale}>
        <Head>
          <meta name="color-scheme" content="dark light" />
        </Head>
        <Body>
          <Preview>{content?.preview || ''}</Preview>
          <Container className="rounded-t-[8px] bg-neutral-900 px-[32px]">
            <Link href={content?.websiteUrl || ''}>
              <Img
                className="my-[32px] h-[48px] w-auto"
                src={content?.logo?.url || undefined}
                alt={content?.logo?.description || undefined}
              />
            </Link>
            <Hr className="border-neutral-700" />
          </Container>
          <Container className="rounded-b-[8px] bg-neutral-900 px-[32px] pb-[8px]">
            <Section className="text-neutral-300">
              <Text>
                {content?.greeting} {name},
              </Text>
              <Text>{content?.description}</Text>
              <Button
                href={verifyUrl}
                className="rounded-full bg-highlight px-[24px] py-[12px] font-bold text-white"
              >
                {content?.buttonLabel}
              </Button>
            </Section>
            <Section className="text-neutral-300">
              <Text>{content?.linkDescription}</Text>
              <Link href={verifyUrl}>{verifyUrl}</Link>
              <Text>{content?.ignoreDisclaimer}</Text>
              <Text>
                {content?.closingRemark}
                <br />
                {content?.signature}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
