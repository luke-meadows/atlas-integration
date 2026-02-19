import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';
import { media } from '@/lib/media';
import { Media } from '@/components/Media';

export function TrustBar() {
  const logos = [
    media.logos.l1,
    media.logos.l2,
    media.logos.l3,
    media.logos.l4,
    media.logos.l5,
  ];

  return (
    <section className="border-y border-border/70 bg-card/40">
      <Container className="py-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Built for medium to large teams. Calm, senior-led delivery.
            </p>
            <div className="text-xs text-muted">
              <div>{site.proof.line1}</div>
              <div>{site.proof.line2}</div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {logos.map((l, idx) => (
            <div key={idx} className="h-16">
              <Media item={l} className="h-16" rounded="rounded-2xl" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
