import type { Counts, CountsDays } from '@/types/schedule';

export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';

export type Day = {
  dayOfWeek: DayOfWeek;
  lecture: Array<{ startAt: string; endAt: string }>;
};

export type OneResponse = Day[];
export type ManyResponse = OneResponse[];

const DAY_INDEX: Record<DayOfWeek, number> = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
};

function toMinute(time: string) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}

function toHM(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
}

function fill(bucket: Counts, start: string, end: string) {
  for (let i = toMinute(start); i < toMinute(end); i += 30) {
    const key = toHM(i);
    bucket[key] = (bucket[key] ?? 0) + 1;
  }
}

export function countsFromOne(res: OneResponse, dayCount = 5): CountsDays {
  const outArray: CountsDays = new Array(dayCount).fill(undefined);
  for (const day of res) {
    const index = DAY_INDEX[day.dayOfWeek];
    if (!outArray[index]) outArray[index] = {};
    const bucket = outArray[index];
    for (const lec of day.lecture) fill(bucket, lec.startAt, lec.endAt);
  }
  return outArray;
}

export function countsFromMany(resps: ManyResponse, dayCount = 5): CountsDays {
  const outArray: CountsDays = new Array(dayCount).fill(undefined);
  for (const res of resps) {
    for (const day of res) {
      const index = DAY_INDEX[day.dayOfWeek];
      if (!outArray[index]) outArray[index] = {};
      const bucket = outArray[index];
      for (const lec of day.lecture) fill(bucket, lec.startAt, lec.endAt);
    }
  }
  return outArray;
}
