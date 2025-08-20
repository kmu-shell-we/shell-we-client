'use client';

import { CountsDays } from '@/types/schedule';

import Day from '@/app/team/_component/schedule/day';

type ScheduleProps = {
  startAt: number;
  endAt: number;
  countsDays: CountsDays;
};

export default function Schedule({ startAt, endAt, countsDays }: ScheduleProps) {
  return (
    <div className="flex flex-row items-start justify-start overflow-auto rounded-lg outline outline-1 outline-neutral-500">
      {countsDays.map((data, dayIndex) => {
        const isLast = dayIndex === countsDays.length - 1;

        return (
          <div key={dayIndex} className="w-full">
            <Day startAt={startAt} endAt={endAt} counts={data} />
            {!isLast && (
              <div className="w-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-neutral-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}
