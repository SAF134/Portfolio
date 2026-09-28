"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[#09090B] text-white hover:bg-zinc-800 shadow-sm border border-[#09090B]",
      secondary:
        "bg-white text-[#09090B] border border-[#E4E4E7] hover:border-zinc-900 hover:bg-zinc-50 shadow-sm",
      ghost:
        "bg-transparent text-[#52525B] hover:text-[#09090B] hover:bg-zinc-100 border border-transparent",
      icon:
        "bg-white text-[#09090B] border border-[#E4E4E7] hover:border-zinc-900 hover:bg-zinc-50 rounded-full",
    };

    const sizeStyles = {
      sm: variant === "icon" ? "w-8 h-8 p-1.5" : "text-xs px-3 py-1.5 rounded-full gap-1.5",
      md: variant === "icon" ? "w-10 h-10 p-2" : "text-sm px-5 py-2.5 rounded-full gap-2",
      lg: variant === "icon" ? "w-12 h-12 p-3" : "text-base px-6 py-3 rounded-full gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
