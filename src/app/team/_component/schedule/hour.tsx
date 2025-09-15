'use client';

import { Counts } from '@/types/schedule';

import Cell from '@/app/team/_component/schedule/cell';

type HourProps = {
  hour: number;
  counts?: Counts;
};

export default function Hour({ hour, counts = {} }: HourProps) {
  const h = String(hour).padStart(2, '0');
  const time1 = `${h}:00`;
  const time2 = `${h}:30`;

  const count1 = Number(counts[time1] ?? 0);
  const count2 = Number(counts[time2] ?? 0);

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="h-5 self-stretch">
        <Cell count={count1} />
      </div>
      <div className="h-0 outline-1 outline-offset-[-0.50px] outline-neutral-300" />
      <div className="h-5 self-stretch">
        <Cell count={count2} />
      </div>
    </div>
  );
}
