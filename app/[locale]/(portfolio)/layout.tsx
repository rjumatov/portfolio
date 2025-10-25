import type { Locale } from 'next-intl';
import ScrollToTop from '@/app/ui/button/scroll-to-top';
import Footer from '@/app/ui/footer/footer';
import Navbar from '@/app/ui/navbar/navbar';

export default async function Layout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={locale as Locale} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer locale={locale as Locale} />
      <ScrollToTop />
    </div>
  );
}
