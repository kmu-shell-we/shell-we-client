import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

const logoVariants = cva(
    "left-0 top-0 absolute text-center justify-start text-blue-500 font-bold",
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                '2xl': "text-2xl",
                '3xl': "text-3xl",
            },
            leading: {
                none: "leading-none",
                tight: "leading-tight",
                normal: "leading-normal",
                loose: "leading-loose",
                '7': "leading-7",
                '8': "leading-9",
            }
        },
        defaultVariants: {
            size: 'base',
            leading: 'normal',
        }
    }
)

type LogoProps = HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof logoVariants> & {
    className?: string
}

const Logo = forwardRef<HTMLSpanElement, LogoProps>(
    ({ className, size, leading, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(logoVariants({ size, leading }), className)}
                {...props}
            >
        SHELL WE
      </span>
        )
    }
)

Logo.displayName = 'Logo'

export default Logo
