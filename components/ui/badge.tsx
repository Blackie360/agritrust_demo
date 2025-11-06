import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "border-transparent bg-gray-100 text-gray-700",
  outline: "border border-gray-300 bg-transparent text-gray-700"
} as const;

type BadgeVariant = keyof typeof badgeVariants;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium",
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

