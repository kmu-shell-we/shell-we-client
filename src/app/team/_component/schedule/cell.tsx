'use client';

import { cn } from '@/lib/utils';

interface Props {
  count?: number;
}

export default function Cell({ count = 0 }: Props) {
  return <div className={cn('h-full w-full', `bg-purple-${Math.min(9, count)}00`)} />;
}
