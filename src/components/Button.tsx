import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ' +
    'focus:outline-none focus:ring-2 focus:ring-accent/35';

  const styles: Record<string, string> = {
    primary: 'bg-accent text-white shadow-crisp hover:brightness-110',
    secondary:
      'bg-card/35 text-fg border border-border/80 hover:border-accent/35 hover:bg-card/55',
    ghost: 'text-fg hover:bg-card/45',
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
