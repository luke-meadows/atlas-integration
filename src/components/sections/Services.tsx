import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/lib/data';
import { Reveal } from '@/components/Reveal';
import { GradientCard } from '@/components/GradientCard';
import {
  Boxes,
  Cable,
  LayoutGrid,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react';

const icons = [TrendingUp, LayoutGrid, Sparkles, Boxes, Cable, Wrench];

export function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-card/20 border-y border-border/70"
    >
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Consultancy-level CRM delivery without the overhead"
          desc="Salesforce and HubSpot services engineered for adoption, governance and scale—plus custom components when configuration isn’t enough."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <GradientCard innerClassName="p-7">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-border/70 bg-card/35 p-3">
                      {/* Icon is blue */}
                      <Icon className="h-5 w-5 text-accent" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-muted leading-relaxed">
                        {s.desc}
                      </p>
                      <ul className="mt-4 grid gap-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-sm text-muted">
                            <span className="text-fg">•</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
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
