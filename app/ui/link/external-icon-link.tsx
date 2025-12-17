import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string | null
  hrefLabel?: string | null
}

export default function ExternalIconLink({ children, href, hrefLabel }: Props) {
  return (
    <a
      href={href || ''}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-(--secondary) duration-200 hover:-translate-y-1 hover:text-(--primary)"
      aria-label={hrefLabel || ''}
    >
      <span className="absolute -inset-1.5" />
      {children}
    </a>
  )
}
