import { cn } from '@/lib/cn';

export function GridGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.55]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="30%" r="70%">
            <stop
              offset="0%"
              stopColor="hsl(var(--accent))"
              stopOpacity="0.16"
            />
            <stop
              offset="45%"
              stopColor="hsl(var(--accent2))"
              stopOpacity="0.10"
            />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fade">
            <rect width="100%" height="100%" fill="url(#glow)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade)" />
      </svg>

      <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-16 -right-24 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />
    </div>
  );
}
