'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/lib/site';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/82 backdrop-blur">
      <div className="h-[2px] w-full" />

      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white font-display text-sm shadow-soft">
            A
          </span>
          <span className="font-display tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="relative text-sm text-muted hover:text-fg transition
                         after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                         after:bg-gradient-to-r after:from-accent after:to-accent2
                         hover:after:w-full after:transition-all"
            >
              {i.label}
            </Link>
          ))}
          <Button href={site.ctas.primary.href} variant="primary">
            {site.ctas.primary.label}
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-border px-3 py-2 text-sm hover:border-accent/35"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </Container>

      <div
        className={cn(
          'md:hidden border-t border-border',
          open ? 'block' : 'hidden',
        )}
      >
        <Container className="py-4 flex flex-col gap-3">
          {site.nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-fg transition"
            >
              {i.label}
            </Link>
          ))}
          <Button
            href={site.ctas.primary.href}
            variant="primary"
            className="w-fit"
          >
            {site.ctas.primary.label}
          </Button>
        </Container>
      </div>
    </header>
  );
}
