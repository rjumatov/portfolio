'use client';

import type { ProcessStep } from '@/app/lib/contentful/generated/sdk';
import ProcessStepItem from '@/app/ui/steps/process-step-item';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type Props = {
  content?: ProcessStep[];
};

export default function ProcessSteps({ content }: Props) {
  if (!content || content.length === 0) return null;

  const steps = content.slice(0, -1);
  const lastStep = content[content.length - 1];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref} className="relative">
        <motion.span
          className="absolute top-6 left-3.5 w-px bg-(--highlight) sm:top-7 sm:left-4"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <ul className="space-y-2 sm:space-y-4 md:space-y-6">
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
  );
}
