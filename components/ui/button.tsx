import * as React from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  default:
    "bg-white/90 text-gray-900 hover:bg-white focus-visible:ring-white/80 focus-visible:ring-opacity-60",
  secondary:
    "bg-white/10 text-white hover:bg-white/16 focus-visible:ring-white/50",
  ghost: "bg-transparent text-white hover:bg-white/10",
  outline:
    "border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/40",
  link: "text-white underline-offset-4 underline hover:text-white/80"
} as const;

const sizeStyles = {
  default: "h-12 px-6",
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "h-12 w-12"
} as const;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

