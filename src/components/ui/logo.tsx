import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

const logoVariants = cva(
    "text-blue-500 font-bold",
    {
        variants: {
            size: {
                xs: "text-xs leading-none",
                sm: "text-sm leading-tight",
                base: "text-base leading-normal",
                lg: "text-lg leading-7",
                xl: "text-xl leading-loose",
                '2xl': "text-2xl leading-loose",
                '3xl': "text-3xl leading-9",
            }
        },
        defaultVariants: {
            size: 'base',
        }
    }
)

type LogoProps = HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof logoVariants>

const Logo = forwardRef<HTMLSpanElement, LogoProps>(
    ({ className, size, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(logoVariants({ size }), className)}
                {...props}
            >
        SHELL WE
      </span>
        )
    }
)

Logo.displayName = 'Logo'

export default Logo
