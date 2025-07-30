import { type HTMLAttributes, forwardRef } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const spinnerVariants = cva('animate-spin rounded-full border-neutral-200 border-t-neutral-700', {
  variants: {
    size: {
      small: 'h-6 w-6 border-4',
      default: 'h-8 w-8 border-5',
      large: 'h-10 w-10 border-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type SpinnerProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof spinnerVariants>;

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className, size, ...props }, ref) => {
  return <div ref={ref} className={cn(spinnerVariants({ size }))} {...props} />;
});

Spinner.displayName = 'Spinner';

export default Spinner;
