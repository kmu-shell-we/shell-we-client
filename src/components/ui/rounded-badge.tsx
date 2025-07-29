import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React, { HTMLAttributes, forwardRef } from 'react'

const roundedBadgeVariants = cva(
    "flex rounded-full items-center px-4 py-2",
    {
        variants: {
            size: {
                default: "gap-2",
                small: "gap-1"
            },
            variant: {
                primary: "bg-blue-500 text-white",
                secondary: "bg-neutral-700 text-white",
                success: "bg-green-500 text-white",
                warning: "bg-amber-500 text-white",
                error: "bg-red-500 text-white",
                white: "bg-white border border-blue-900 text-blue-900",
            },
        },
        defaultVariants: {
            size: "default",
            variant: "primary"
        }
    }
)

type RoundedBadgeProps = HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof roundedBadgeVariants>

const RoundedBadge = forwardRef<HTMLSpanElement, RoundedBadgeProps>(
    ({ className, children, size, variant, ...props}, ref) => {
        return (
            <span
                ref={ref}
                className={cn(roundedBadgeVariants({ size, variant }), className)}
                {...props}
            >
                {children}
            </span>
        )
    }
)

RoundedBadge.displayName = 'RoundedBadge'

export default RoundedBadge