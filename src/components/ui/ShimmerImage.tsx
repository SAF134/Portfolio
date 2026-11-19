"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

export interface ShimmerImageProps extends ImageProps {
  skeletonClassName?: string;
}

/**
 * ShimmerImage wraps Next.js Image with an animated skeleton shimmer placeholder.
 * It smoothly transitions from the shimmering skeleton to the image once loaded.
 */
export function ShimmerImage({
  className,
  skeletonClassName,
  alt,
  onLoad,
  onError,
  fill,
  ...props
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!isLoaded && !hasError && (
        <Skeleton
          className={cn(
            "absolute inset-0 z-10 w-full h-full pointer-events-none rounded-[inherit]",
            skeletonClassName
          )}
        />
      )}
      <Image
        alt={alt}
        fill={fill}
        className={cn(
          className,
          "transition-opacity duration-500 ease-out",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setIsLoaded(true);
          setHasError(true);
          onError?.(e);
        }}
        {...props}
      />
    </>
  );
}
