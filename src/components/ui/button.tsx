import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "~/components/ui/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-evelan-accent focus:ring-offset-2 dark:hover:bg-evelan-secondary dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-evelan-accent disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-evelan-secondary",
  {
    variants: {
      variant: {
        default:
          "bg-evelan-primary text-white hover:bg-evelan-accent dark:bg-evelan-primary dark:text-white",
        destructive:
          "bg-evelan-error text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-evelan-secondary hover:bg-evelan-secondary/10 dark:border-evelan-secondary dark:text-slate-100",
        subtle:
          "bg-evelan-secondary/20 text-slate-900 hover:bg-evelan-secondary/30 dark:bg-evelan-secondary dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-evelan-secondary/10 dark:hover:bg-evelan-secondary dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-evelan-primary dark:text-evelan-accent hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
