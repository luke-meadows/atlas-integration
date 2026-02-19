import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { industries } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Industries() {
  return (
    <section className="py-16 md:py-24" id="industries">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Strong fit for complex operations"
          desc="We work across sectors, but we’re particularly effective in construction, trades and infrastructure—where process, handovers and data quality matter."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {industries.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.05}>
              <div className="rounded-3xl border border-border bg-bg p-7 shadow-soft">
                <h3 className="font-display text-xl tracking-tight">
                  {i.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{i.desc}</p>
                <ul className="mt-4 grid gap-2">
                  {i.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted">
                      <span className="text-fg">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
