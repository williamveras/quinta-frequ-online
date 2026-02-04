import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
      </span>
      <span className="text-sm font-semibold uppercase tracking-wider text-destructive">
        Ao Vivo
      </span>
    </div>
  );
};
