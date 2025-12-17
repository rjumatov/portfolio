import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  fullWidth?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  fullWidth,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`base-border hover-effect group font-(family-name:--font-geist-mono) overflow-hidden rounded-full px-6 py-3 font-bold backdrop-blur-sm transition-all duration-300 ${fullWidth ? 'w-full' : ''}`}
    >
      <span className="flex justify-center">{children}</span>
    </button>
  )
}
