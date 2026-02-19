import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { faqs } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-card/30 border-y border-border/70"
    >
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers"
          desc="Clear expectations, fewer surprises."
        />

        <div className="mt-10 grid gap-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className="rounded-3xl border border-border bg-bg p-6">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
