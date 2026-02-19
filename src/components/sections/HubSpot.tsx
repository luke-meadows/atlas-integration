import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { hubspotCapabilities } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function HubSpot() {
  return (
    <section
      id="hubspot"
      className="py-16 md:py-24 bg-card/30 border-y border-border/70"
    >
      <Container>
        <SectionHeading
          eyebrow="HubSpot"
          title="Full suite delivery across Marketing, Sales, Service, CMS & Ops"
          desc="We set HubSpot up properly: lifecycle clarity, clean properties, governance, automations, and reporting your leadership will trust—plus sensible alignment with Salesforce where needed."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hubspotCapabilities.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.04}>
              <div className="rounded-3xl border border-border bg-bg p-7 shadow-soft">
                <h3 className="font-display text-xl tracking-tight">
                  {h.title}
                </h3>
                <ul className="mt-4 grid gap-2">
                  {h.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted">
                      <span className="text-fg">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-border bg-bg p-8 shadow-soft">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Alignment approach
            </p>
            <p className="mt-3 text-muted leading-relaxed">
              We design lifecycle stages, handoffs, and sync rules so Salesforce
              and HubSpot operate as one system. The goal: fewer duplicates,
              clearer ownership, and reporting that doesn’t collapse under edge
              cases.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                'Lifecycle & ownership',
                'Sync rules & dedupe',
                'Governance & reporting',
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted"
                >
                  <span className="text-fg">•</span> {x}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
