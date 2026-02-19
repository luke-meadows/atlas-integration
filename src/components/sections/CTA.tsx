import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { site } from '@/lib/site';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24">
      <div className="noise" />
      <Container>
        <div className="rounded-[2.5rem] border border-border bg-bg p-10 md:p-14 shadow-crisp relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />

          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                  Ready to streamline your CRM journey?
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-muted leading-relaxed">
                  Share your current stack and the outcome you want. We’ll
                  respond with a recommended approach, timeline and estimate.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  href={`mailto:${site.email}?subject=Atlas%20Integrations%20—%20Project%20enquiry`}
                  variant="primary"
                >
                  Email us
                </Button>
                <Button href="#services" variant="secondary">
                  View services
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted md:text-right">
                {site.email} • {site.phone}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
