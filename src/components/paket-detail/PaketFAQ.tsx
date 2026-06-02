'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/lib/pakete-data';

type Props = { faq: FaqItem[] };

export default function PaketFAQ({ faq }: Props) {
  return (
    <section className="pd-faq">
      <div className="container-narrow">
        <h2>Häufige Fragen.</h2>
        <Accordion type="single" collapsible>
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger style={{ textAlign: 'left', fontWeight: 600, fontSize: '15px' }}>
                {item.q}
              </AccordionTrigger>
              <AccordionContent style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--fg-muted)' }}>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
