'use client';

import { cn } from '@/lib/utils';

function cellCount(count: number) {
  const c = Math.max(0, Math.min(5, count));

  if (c === 0) return 'bg-white';
  if (c === 1) return 'bg-purple-100';
  if (c === 2) return 'bg-purple-200';
  if (c === 3) return 'bg-purple-300';
  if (c === 4) return 'bg-purple-400';
  return 'bg-purple-500';
}

export default function Cell({ count = 0 }: { count: number }) {
  return <div className={cn('h-full w-full transition-colors', cellCount(count))}></div>;
}
