import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

const avatarVariants = cva(
    "flex items-center justify-center bg-neutral-100 rounded-full text-black font-medium",
    {
        variants: {
            size: {
                small: "w-6 h-6 text-xs leading-none",
                default: "w-8 h-8 text-sm leading-tight",
                large: "w-10 h-10 text-base leading-normal",
            }
        },
        defaultVariants: {
            size: 'default',
        }
    }
)

type AvatarProps = HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof avatarVariants>

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
    ({ className, size, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(avatarVariants({ size }), className)}
                {...props}
            >
      </span>
        )
    }
)

Avatar.displayName = 'Avatar'

export default Avatar