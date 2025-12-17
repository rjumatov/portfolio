import { ArrowRight04Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ArrowItem({ children }: Props) {
  return (
    <li className="mb-2 flex gap-2 leading-snug">
      <HugeiconsIcon
        icon={ArrowRight04Icon}
        className="shrink-0 text-(--highlight)"
      />
      {children}
    </li>
  )
}
