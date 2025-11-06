import * as React from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  default:
    "bg-black text-white hover:bg-gray-900 focus-visible:ring-gray-900/50",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-200/50",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  outline:
    "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-300/50",
  link: "text-gray-700 underline-offset-4 underline hover:text-gray-900"
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

