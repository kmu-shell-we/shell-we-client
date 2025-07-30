"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { forwardRef, type HTMLAttributes } from "react"

const spinnerWrapperVariants = cva("relative", {
    variants: {
        size: {
            small: "w-6 h-6",
            default: "w-8 h-8",
            large: "w-10 h-10",
        },
    },
    defaultVariants: {
        size: "default",
    },
})

const spinnerTrackVariants = cva(
    "rounded-full border-neutral-200 absolute",
    {
        variants: {
            size: {
                small: "w-6 h-6 border-4",
                default: "w-8 h-8 border-[5px]",
                large: "w-10 h-10 border-[6px]",
            },
        },
    }
)

const spinnerArcVariants = cva(
    "absolute inset-0 rounded-full border-t-neutral-700 border-r-transparent border-b-transparent border-l-transparent animate-spin",
    {
        variants: {
            size: {
                small: "border-4",
                default: "border-[5px]",
                large: "border-[6px]",
            },
        },
    }
)

type SpinnerProps = HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof spinnerWrapperVariants>

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(spinnerWrapperVariants({ size }), className)}
                {...props}
            >
                <div className={cn(spinnerTrackVariants({ size }))} />
                <div className={cn(spinnerArcVariants({ size }))} />
            </div>
        )
    }
)

Spinner.displayName = "Spinner"

export default Spinner