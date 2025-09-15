'use client';

import { useMemo } from 'react';

import { CountsDays } from '@/types/schedule';

import Day from '@/app/team/_component/schedule/day';

type ScheduleProps = {
  startAt: string;
  endAt: string;
  countsDays: CountsDays;
};

export default function Schedule({ startAt, endAt, countsDays }: ScheduleProps) {
  const { startHour, endHour } = useMemo(() => {
    const [sH, sM] = (startAt ?? '').split(':').map(Number);
    const [eH, eM] = (endAt ?? '').split(':').map(Number);
    const valid =
      Number.isInteger(sH) &&
      Number.isInteger(sM) &&
      Number.isInteger(eH) &&
      Number.isInteger(eM) &&
      sH >= 0 &&
      sH <= 23 &&
      sM >= 0 &&
      sM <= 59 &&
      eH >= 0 &&
      eH <= 23 &&
      eM >= 0 &&
      eM <= 59;
    if (valid) {
      return { startHour: 9, endHour: 18 };
    }
    return { startHour: sH, endHour: eM === 0 ? eH : eH + 1 };
  }, [startAt, endAt]);

  return (
    <div className="flex rounded-lg outline-1 outline-neutral-300">
      {countsDays.map((data, dayIndex) => {
        const isLast = dayIndex === countsDays.length - 1;

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
