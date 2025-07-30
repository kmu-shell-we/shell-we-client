import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {forwardRef, HTMLAttributes} from "react";

const badgeVariant = cva(
    "flex gap-1 items-center rounded-lg",
    {
        variants:{
            color:{
                primary: "bg-blue-500 text-white",
                secondary: "bg-neutral-700 text-white",
                success: "bg-green-500 text-white",
                warning: "bg-amber-500 text-white",
                error: "bg-red-500 text-white",
                white: "bg-white text-blue-900 border border-blue-900"
            },
            size:{
                xs: "px-2.5 py-1 text-xs",
                small: "px-3 py-1.5 text-sm",
                default: "px-3.5 py-2 text-base"
            }
        },
        defaultVariants:{
            color:"primary",
            size: "default"
        }
    }
)

type badgeProps = VariantProps<typeof badgeVariant> & HTMLAttributes<HTMLSpanElement>;

const Badge = forwardRef<HTMLSpanElement,badgeProps>(
    ({className,color,size,children,...props},ref)=>{
        return(
            <span
                ref={ref}
                className={cn(badgeVariant({color,size}),className)}
                {...props}
            >
                {children}
            </span>
        )
    }
)

Badge.displayName = "Badge";

export default Badge;