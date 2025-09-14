'use client';

import { cn } from '@/lib/utils';

interface Props {
  count?: number;
}

export default function Cell({ count = 0 }: Props) {
  const n = Math.min(count, 9);

  const colors = [
    'bg-white',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'bg-purple-700',
    'bg-purple-800',
    'bg-purple-900',
  ];

  return <div className={cn('h-full w-full', colors[n])} />;
}
