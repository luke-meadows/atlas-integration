import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-muted leading-relaxed">{desc}</p> : null}
    </div>
  );
}
