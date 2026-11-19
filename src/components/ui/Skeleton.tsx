import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  shimmer?: boolean;
}

/**
 * Skeleton component with smooth shimmer wave animation.
 * Used as a placeholder while content or images are loading.
 */
export function Skeleton({
  className,
  shimmer = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-zinc-200/90",
        shimmer && "shimmer-effect",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
