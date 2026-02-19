import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { focusItems } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Focus() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Focus"
          title="Web-to-Contract CRM, built to scale"
          desc="We help you move from enquiry to contract with fewer manual steps, better data quality, and automation your teams actually adopt."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {focusItems.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-bg p-7 shadow-soft">
                <h3 className="font-display text-xl tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{f.desc}</p>
                <ul className="mt-4 grid gap-2">
                  {f.bullets.map((b) => (
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
