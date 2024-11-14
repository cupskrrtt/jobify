import { cn } from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva("border-2 rounded-lg font-semibold", {
  variants: {
    variant: {
      default:
        "bg-accent text-text-primary-1 border-transparent hover:bg-border-focus",
      outline: "border-accent text-text-primary-1 hover:bg-border-focus",
      ghost: "border-transparent text-primary hover:bg-border-focus",
    },
    size: {
      default: "px-4 py-2",
      small: "px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className, size }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
