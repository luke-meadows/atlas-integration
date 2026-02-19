import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { agentforceExamples } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { GradientCard } from '@/components/GradientCard';
import { Sparkles, ShieldCheck, Workflow } from 'lucide-react';

export function Agentforce() {
  const icons = [Sparkles, Workflow, ShieldCheck];

  return (
    <section id="agentforce" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Agentforce"
          title="Automation that reduces admin and improves decision-making"
          desc="Evidence-first Agentforce patterns: summaries, scoring and next-step guidance—useful, explainable, and measurable."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {agentforceExamples.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <GradientCard innerClassName="p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-border/70 bg-card/35 p-3">
                      {/* Icon is blue */}
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display text-xl tracking-tight">
                      {a.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-muted leading-relaxed">{a.summary}</p>

                  <div className="mt-4 grid gap-2">
                    {a.outcomes.map((o) => (
                      <div key={o} className="text-sm text-muted">
                        <span className="text-fg">•</span> {o}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-border/70 bg-card/35 p-4">
                    <p className="text-xs text-muted uppercase tracking-widest font-semibold">
                      Guardrails
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Approved sources • Logged outputs • Measured impact
                    </p>
                  </div>
                </GradientCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
