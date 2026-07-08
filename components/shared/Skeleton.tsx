import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-charcoal via-charcoal/60 to-charcoal motion-reduce:animate-none",
        className
      )}
    />
  );
}
