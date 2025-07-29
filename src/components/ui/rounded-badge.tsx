import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React, { HTMLAttributes, forwardRef } from 'react'

const roundedBadgeVariants = cva(
    "inline-flex rounded-full items-center text-base font-normal px-4 py-2",
    {
        variants: {
            size: {
                default: "h-6 gap-2",
                small: "h-5 gap-1"
            },
            variant: {
                primary: "bg-blue-500 text-white",
                secondary: "bg-neutral-700 text-white",
                success: "bg-green-500 text-white",
                warning: "bg-red-500 text-white",
                error: "bg-amber-500 text-white",
                white: "bg-white border border-blue-900 text-black",
            },
            iconPosition: {
                none: "",
                left: "flex-row",
                right: "flex-row-reverse",
                only: "justify-center",
            }
        },
        defaultVariants: {
            size: "default",
            variant: "primary",
            iconPosition: "none"
        }
    }
)

type RoundedBadgeProps = HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof roundedBadgeVariants> & {
    className?: string
    children?: React.ReactNode
    icon?: React.ReactNode
}

const RoundedBadge = forwardRef<HTMLSpanElement, RoundedBadgeProps>(
    ({ className, size, variant, iconPosition, children, icon, ...props}, ref) => {
        return (
            <span
                ref={ref}
                className={cn(roundedBadgeVariants({ size, variant, iconPosition}), className)}
                {...props}
            >
                {icon && <span className="inline-flex items-center justify-center w-4 h-4">{icon}</span>}
                {iconPosition !== 'only' && children}
            </span>
        )
    }
)

RoundedBadge.displayName = 'RoundedBadge'

export default RoundedBadge