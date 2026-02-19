import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { MediaItem } from '@/lib/media';

export function Media({
  item,
  className,
  rounded = 'rounded-2xl',
}: {
  item: MediaItem;
  className?: string;
  rounded?: string;
}) {
  if (item.src) {
    return (
      <div className={cn('relative overflow-hidden', rounded, className)}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden border border-border bg-card',
        rounded,
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/10" />
      <div className="noise" />
      <div className="relative p-6">
        <p className="text-xs font-semibold tracking-widest text-muted uppercase">
          Placeholder
        </p>
        <p className="mt-2 font-medium">
          {item.label ?? 'Add an image path in src/lib/media.ts'}
        </p>
        <p className="mt-1 text-sm text-muted">
          Set <span className="font-mono">src</span> in{' '}
          <span className="font-mono">src/lib/media.ts</span>
        </p>
      </div>
    </div>
  );
}
