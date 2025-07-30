import { HTMLAttributes, forwardRef } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const roundedBadgeVariants = cva('flex items-center rounded-full px-4 py-2', {
  variants: {
    size: {
      default: 'gap-2',
      small: 'gap-1',
    },
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-neutral-700 text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-amber-500 text-white',
      error: 'bg-red-500 text-white',
      white: 'border border-blue-900 bg-white text-blue-900',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'primary',
  },
});

type RoundedBadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof roundedBadgeVariants>;

const RoundedBadge = forwardRef<HTMLSpanElement, RoundedBadgeProps>(
  ({ className, children, size, variant, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(roundedBadgeVariants({ size, variant }), className)} {...props}>
        {children}
      </span>
    );
  }
);

RoundedBadge.displayName = 'RoundedBadge';

export default RoundedBadge;
