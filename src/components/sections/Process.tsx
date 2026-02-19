import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { processSteps } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="Predictable delivery with strong governance"
          desc="We keep delivery calm: clear scope, clean build standards, measurable outcomes and proper handover."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="rounded-3xl border border-border bg-bg p-7 shadow-soft">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                  Step {i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
