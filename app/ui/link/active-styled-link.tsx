'use client'

import type { ReactNode } from 'react'
import { Link, usePathname } from '@/i18n/navigation'

type Props = {
  children: ReactNode
  href: string
}

export default function ActiveStyledLink({ children, href }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`underline-effect ${pathname === href ? 'text-(--highlight-link) hover:after:hidden' : ''}`}
      aria-current={pathname === href ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
