import { Loading02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

type Props = {
  size?: number
}

export default function LoadingSpinner({ size = 52 }: Props) {
  return (
    <HugeiconsIcon
      icon={Loading02Icon}
      className="animate-spin text-(--secondary)"
      size={size}
    />
  )
}
