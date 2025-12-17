'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import type { ProcessStep } from '@/app/lib/contentful/generated/sdk'
import ProcessStepItem from '@/app/ui/steps/process-step-item'

type Props = {
  content: ProcessStep[]
}

export default function ProcessSteps({ content }: Props) {
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once: true, amount: 'some' })

  const steps = content.slice(0, -1)
  const lastStep = content[content.length - 1]

  return (
    <>
      <div className="relative">
        <motion.span
          className="absolute top-6 left-3.5 w-px bg-(--highlight) sm:top-7 sm:left-4"
          initial={{ height: 0 }}
          animate={isInView && { height: '100%' }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <ul ref={ref} className="space-y-2 sm:space-y-4 md:space-y-6">
          {steps.map(({ title, description }, index) => (
            <ProcessStepItem
              key={title}
              index={index}
              title={title}
              description={description}
              delay={index * 0.2 + 0.2}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
      {lastStep && (
        <ul className="mt-4">
          <ProcessStepItem
            index={steps.length}
            title={lastStep.title}
            description={lastStep.description}
            delay={steps.length * 0.2 + 0.2}
            isInView={isInView}
          />
        </ul>
      )}
    </>
  )
}
