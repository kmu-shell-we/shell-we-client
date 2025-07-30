"use client"

import * as React from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
    "flex items-center justify-center overflow-hidden rounded-full bg-neutral-100 text-black font-medium",
    {
      variants: {
        size: {
          small: "w-6 h-6 text-xs leading-none",
          default: "w-8 h-8 text-sm leading-tight",
          large: "w-10 h-10 text-base leading-normal",
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
)

type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof avatarVariants> & {
  src?: string
  name?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, size, src, name, ...props }, ref) => {
      const fallbackText = name?.[0]

      return (
          <div ref={ref} className={cn(avatarVariants({ size }), className)} {...props}>
            {src ? (
                <Image
                    src={src}
                    alt="user image"
                    fill
                    sizes="100%"
                    className="object-cover"
                />
            ) : fallbackText ? (
                <span className="flex items-center justify-center w-full h-full">
            {fallbackText}
          </span>
            ) : null}
          </div>
      )
    }
)

Avatar.displayName = "Avatar"
export default Avatar