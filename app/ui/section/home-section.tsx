import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import contentfulClient from '@/app/lib/contentful/client'
import HeroAnimation from '@/app/ui/animation/hero/hero-animation'
import RadialAnimation from '@/app/ui/animation/radial-animation'
import RevealAnimation from '@/app/ui/animation/reveal-animation'
import ViewAnimation from '@/app/ui/animation/view-animation'
import ShiningButton from '@/app/ui/button/shining-button'
import { Link } from '@/i18n/navigation'

type Props = {
  locale: Locale
}

export default async function HomeSection({ locale }: Props) {
  const query = await contentfulClient.homeContent({ locale })
  const content = query.homeCollection?.items[0]

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: this id is globally unique by design
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center py-24 md:py-36"
    >
      <RadialAnimation top={0} left={0} radius={50} />
      <ViewAnimation
        direction="fromBottom"
        delay={0.4}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/4 max-h-3/4 -translate-y-1/6 opacity-50 sm:pointer-events-auto sm:left-1/3 sm:opacity-100 md:left-1/2 dark:opacity-40 dark:sm:opacity-100">
          <HeroAnimation floatingLabel={content?.floatingLabel} />
        </div>
      </ViewAnimation>
      <RevealAnimation>
        <div className="mx-auto max-w-(--breakpoint-xl) px-6">
          <h6 className="mb-5">
            <div className="flex space-x-2">
              <Image
                src="/waving-hand.svg"
                width={30}
                height={30}
                alt={content?.greetingDescription || ''}
              />
              <span>{content?.greeting}</span>
            </div>
          </h6>
          <h1 className="mb-3">
            {content?.introHeadingMain}{' '}
            <span className="text-(--highlight)">
              {content?.introHeadingHighlight}
            </span>
          </h1>
          <h3>{content?.introSubheading}</h3>
          <p className="relative mt-6 sm:w-2/3 lg:w-5/12">
            {content?.introDescription}
          </p>
          <div className="flex items-center space-x-4 pt-16">
            <Link href="#contact" tabIndex={-1}>
              <ShiningButton>{content?.ctaButtonLabel}</ShiningButton>
            </Link>
            <Link
              href="#about"
              className="relative rounded-full bg-(--highlight) p-2"
              aria-label={content?.scrollDownLabel || ''}
            >
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                className="relative top-1.5 animate-bounce text-white"
                size={34}
              />
            </Link>
          </div>
        </div>
      </RevealAnimation>
    </section>
  )
}
