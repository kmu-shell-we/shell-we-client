'use client';

import { forwardRef, useState } from 'react';

import type { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const avatarVariants = cva('overflow-hidden rounded-full bg-neutral-100', {
  variants: {
    size: {
      small: 'h-6 w-6 text-xs leading-none',
      default: 'h-8 w-8 text-sm leading-tight',
      large: 'h-10 w-10 text-base leading-normal',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const sizeMap = {
  small: 24,
  default: 32,
  large: 40,
} as const;

type AvatarProps = Omit<ImageProps, 'width' | 'height' | 'src'> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    fallback?: string;
  };

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const pixelSize = sizeMap[size || 'default'];
    const showFallback = !src || imageError || !imageLoaded;

    return (
      <div ref={ref} className={cn(avatarVariants({ size }), className)}>
        {src && !imageError && (
          <Image
            src={src}
            alt={alt}
            width={pixelSize}
            height={pixelSize}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
            {...props}
          />
        )}
        {showFallback && fallback && (
          <span className="flex h-full w-full items-center justify-center font-medium text-neutral-600">
            {fallback}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
