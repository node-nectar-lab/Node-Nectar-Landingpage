'use client';

import { useEffect, useRef } from 'react';
import type { ProcessStep } from '@/lib/pakete-data';

type Props = { steps: ProcessStep[] };

export default function PaketProcess({ steps }: Props) {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = stepsRef.current?.querySelectorAll<HTMLElement>('.pd-reveal');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pd-process">
      <div className="container-narrow">
        <p className="pd-process-label">Ablauf</p>
        <h2>So funktioniert es.</h2>
        <div className="pd-steps" ref={stepsRef}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.nr} className="pd-step pd-reveal">
                <div className="pd-step-left">
                  <div className={`pd-step-circle${isLast ? ' last' : ''}`}>
                    {step.nr}
                  </div>
                  {!isLast && <div className="pd-step-line" />}
                </div>
                <div className="pd-step-right">
                  <div className="pd-step-title">{step.title}</div>
                  <p className="pd-step-body">{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
