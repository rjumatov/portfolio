'use client'

import { ArrowUp01Icon } from 'hugeicons-react'
import { motion } from 'motion/react'
import { useLocale } from 'next-intl'
import type { CSSProperties } from 'react'
import { useScrolled, useScrollProgress } from '@/app/lib/hooks/use-scroll'

export default function ScrollToTop() {
  const locale = useLocale()
  const scrolled = useScrolled(150)
  const scrollProgress = useScrollProgress()

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const progressStyle: CSSProperties = {
    background: `conic-gradient(var(--border-color) ${scrollProgress}%, transparent ${scrollProgress}%)`,
    mask: 'linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5 }}
      className={`fixed right-4 bottom-4 rounded-full backdrop-blur-xs xl:right-10 xl:bottom-8 ${
        scrolled ? 'pointer-events-auto z-10' : 'pointer-events-none -z-10'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="relative aspect-square rounded-full p-2.5"
        aria-label={locale === 'en' ? 'Scroll to top' : 'Nach oben scrollen'}
      >
        <div
          className="absolute inset-0 cursor-pointer rounded-full p-[1.5px]"
          style={progressStyle}
        />
        <ArrowUp01Icon strokeWidth={2} className="pb-0.5 text-(--secondary)" />
      </button>
    </motion.div>
  )
}
