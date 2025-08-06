import { ButtonHTMLAttributes, forwardRef } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariant = cva(
  'flex cursor-pointer items-center justify-center gap-2 rounded-xl disabled:cursor-not-allowed',
  {
    variants: {
      color: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-400',
        secondary: 'bg-neutral-700 text-white hover:bg-neutral-800 disabled:bg-neutral-500',
        success: 'bg-green-500 text-white hover:bg-green-600 disabled:bg-green-400',
        warning: 'bg-amber-500 text-white hover:bg-amber-600 disabled:bg-amber-400',
        error: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-400',
        white:
          'border border-blue-900 bg-white text-blue-900 hover:bg-neutral-50 disabled:bg-neutral-200',
      },
      size: {
        small: 'px-4 py-2 text-sm',
        default: 'px-5 py-2.5 text-base',
        large: 'px-6 py-3 text-lg',
      },
      outlined: {
        true: undefined,
        false: undefined,
      },
    },
    compoundVariants: [
      {
        outlined: true,
        color: 'primary',
        class:
          'border border-blue-500 bg-white text-blue-900 hover:bg-blue-50 disabled:bg-blue-100',
      },
      {
        outlined: true,
        color: 'secondary',
        class:
          'border border-neutral-700 bg-white text-neutral-700 hover:bg-neutral-50 disabled:bg-neutral-100',
      },
      {
        outlined: true,
        color: 'success',
        class:
          'border border-green-500 bg-white text-green-500 hover:bg-green-50 disabled:bg-green-100',
      },
      {
        outlined: true,
        color: 'warning',
        class:
          'border border-amber-500 bg-white text-amber-500 hover:bg-amber-50 disabled:bg-amber-100',
      },
      {
        outlined: true,
        color: 'error',
        class: 'border border-red-500 bg-white text-red-500 hover:bg-red-50 disabled:bg-red-100',
      },
    ],
    defaultVariants: {
      color: 'primary',
      size: 'default',
      outlined: false,
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariant> & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, outlined, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariant({ color, size, outlined }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
