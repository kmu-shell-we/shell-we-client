'use client';

import { CountsDays } from '@/types/schedule';

import Day from '@/app/team/_component/schedule/day';

type ScheduleProps = {
  startAt: string;
  endAt: string;
  countsDays: CountsDays;
};

export default function Schedule({ startAt, endAt, countsDays }: ScheduleProps) {
  return (
    <div className="flex rounded-lg outline-1 outline-neutral-500">
      {countsDays.map((data, dayIndex) => {
        const [sH, sM] = startAt.split(':').map(Number);
        const [eH, eM] = endAt.split(':').map(Number);
        const isLast = dayIndex === countsDays.length - 1;

        const startHour = sH;
        const endHour = eM === 0 ? eH : eH + 1;

        return (
          <div key={dayIndex} className="w-full">
            <Day startAt={startHour} endAt={endHour} counts={data} />
            {!isLast && (
              <div className="w-0 outline-1 outline-offset-[-0.50px] outline-neutral-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}
