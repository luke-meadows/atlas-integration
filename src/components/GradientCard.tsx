import { cn } from '@/lib/cn';

export function GradientCard({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn('rounded-3xl bg-accent/25 p-[1px] shadow-soft', className)}
    >
      <div className={cn('rounded-3xl bg-bg', innerClassName)}>{children}</div>
    </div>
  );
}
