import type { Locale } from 'next-intl';
import contentfulClient from '@/app/lib/contentful/client';
import LanguageDropdown from '@/app/ui/navbar/language-dropdown';
import NavMenu from '@/app/ui/navbar/nav-menu';
import ThemeToggle from '@/app/ui/navbar/theme-toggle';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const query = await contentfulClient.navbarContent({ locale });
  const content = query.navbarCollection?.items[0];

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 mx-auto mt-6 flex w-full max-w-(--breakpoint-xl) items-center justify-between px-4">
      <LanguageDropdown
        usFlagDescription={content?.usFlagDescription}
        deFlagDescription={content?.deFlagDescription}
        englishLabel={content?.englishLabel}
        germanLabel={content?.germanLabel}
        switchLanguageLabel={content?.switchLanguageLabel}
      />
      <NavMenu
        homeLabel={content?.homeLabel}
        aboutLabel={content?.aboutLabel}
        servicesLabel={content?.servicesLabel}
        contactLabel={content?.contactLabel}
      />
      <ThemeToggle switchThemeLabel={content?.switchThemeLabel} />
    </nav>
  );
}
