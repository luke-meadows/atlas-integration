import { Container } from '@/components/Container';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display">{site.name}</p>
            <p className="text-sm text-muted mt-1">
              {site.location} •{' '}
              <a
                className="underline decoration-border hover:decoration-muted"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>{' '}
              •{' '}
              <a
                className="underline decoration-border hover:decoration-muted"
                href={`tel:${site.phone}`}
              >
                {site.phone}
              </a>
            </p>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
