'use client';

import { cn } from '@/lib/utils';

function cellLevel(count: number) {
  const level = Math.max(0, Math.min(5, count));

  if (level === 0) return 'bg-white';
  if (level === 1) return 'bg-purple-100';
  if (level === 2) return 'bg-purple-200';
  if (level === 3) return 'bg-purple-300';
  if (level === 4) return 'bg-purple-400';
  return 'bg-purple-500';
}

export default function Cell({ count = 0 }: { count: number }) {
  return <div className={cn('h-full w-full transition-colors', cellLevel(count))}></div>;
}
