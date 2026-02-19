import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { caseStudies } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { Media } from '@/components/Media';

export function Work() {
  return (
    <section
      id="work"
      className="py-16 md:py-24 bg-card/30 border-y border-border/70"
    >
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Enterprise-grade outcomes, delivered cleanly"
          desc="Case studies are placeholders—swap in screenshots and metrics as you build your portfolio."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="group rounded-3xl border border-border bg-bg overflow-hidden shadow-soft">
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                      {c.tag}
                    </p>
                    <p className="text-xs text-muted">Case Study</p>
                  </div>

                  <h3 className="mt-3 font-display text-2xl tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{c.summary}</p>

                  <div className="mt-5 grid gap-2">
                    {c.metrics.map((m) => (
                      <div key={m} className="text-sm text-muted">
                        <span className="text-fg">•</span> {m}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Media
                    item={c.image}
                    className="h-56 md:h-64 transition group-hover:scale-[1.01]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
