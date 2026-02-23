import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { GridGlow } from '@/components/graphics/GridGlow';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';
import { media } from '@/lib/media';
import { Media } from '@/components/Media';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridGlow />
      <div className="noise" />

      <Container className="relative py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Salesforce • HubSpot • Agentforce • Web-to-Contract
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                We simplify Salesforce so your teams can scale.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-muted leading-relaxed">
                Atlas Integration delivers{' '}
                <span className="text-fg">Web-to-Contract CRM</span>— from web
                strategy and lead capture through to opportunity execution,
                ordering and contracts. We add{' '}
                <span className="text-fg">Agentforce automation</span> and
                full-suite <span className="text-fg">HubSpot</span> capability
                so growth doesn’t create admin chaos.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.ctas.primary.href} variant="primary">
                  {site.ctas.primary.label}
                </Button>
                <Button href={site.ctas.secondary.href} variant="secondary">
                  {site.ctas.secondary.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-2xl border border-border bg-bg/70 p-4">
                  <p className="text-xs text-muted">Specialism</p>
                  <p className="mt-2 font-display text-lg">Web-to-Contract</p>
                </div>
                <div className="rounded-2xl border border-border bg-bg/70 p-4">
                  <p className="text-xs text-muted">Automation</p>
                  <p className="mt-2 font-display text-lg">Agentforce</p>
                </div>
                <div className="rounded-2xl border border-border bg-bg/70 p-4">
                  <p className="text-xs text-muted">Platforms</p>
                  <p className="mt-2 font-display text-lg">SF + HubSpot</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative">
              <Media
                item={media.hero.image}
                className="h-[420px] md:h-[520px]"
              />
              {/* <div className="absolute -bottom-8 -left-6 rounded-2xl border border-border bg-bg/85 backdrop-blur px-4 py-3 shadow-soft">
                <p className="text-xs text-muted">Typical outcomes</p>
                <p className="mt-1 text-sm">
                  Fewer handoffs • Cleaner data • Faster follow-up
                </p>
              </div> */}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
