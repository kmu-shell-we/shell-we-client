'use client';

import Hour from '@/app/team/_component/schedule/hour';

type DayProps = {
  startAt: number;
  endAt: number;
  counts?: Record<string, number>;
};

export default function Day({ startAt, endAt, counts = {} }: DayProps) {
  const hours = endAt - startAt;

  return (
    <div className="flex w-full flex-col items-start justify-start">
      {Array.from({ length: hours }).map((_, i) => {
        const hour = startAt + i;
        const isLast = i === hours - 1;

        return (
          <div key={hour} className="w-full">
            <Hour hour={hour} counts={counts} />
            {!isLast && (
              <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-neutral-500" />
            )}
          </div>
        );
      })}
    </div>
  );
}
