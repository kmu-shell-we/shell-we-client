'use client';

import { ClockIcon, PlusIcon } from '@heroicons/react/20/solid';

import Profile from '@/app/team/_component/profile';

import RoundedBadge from '@/components/ui/rounded-badge';

//import Schedule from ''@/app/team/_component/schedule/schedule;

export default function TeamPage() {
  const startAt = 9;
  const endAt = 18;
  const day = ['월', '화', '수', '목', '금'];

  return (
    <div className="flex w-94 flex-col gap-y-6 bg-white px-6">
      {/*Todo: 남은 기간 바꾸기*/}
      <div className="flex justify-center">
        <RoundedBadge size="default" variant="white">
          <ClockIcon className="h-6 w-6" />
          D-100
        </RoundedBadge>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="text-xl font-semibold">팀원</span>

        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <Profile name="김문기" avatar="" />
          <Profile name="김아리" avatar="" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-4">
        <div className="flex justify-between">
          <span className="font=semibold text-xl">시간표</span>
          <PlusIcon className="h-5 w-5" />
        </div>

        <div className="flex flex-col items-stretch gap-3">
          <div className="flex flex-row pl-9">
            {day.map((w, i) => (
              <span
                key={i}
                className="flex-1 justify-start text-center text-xs font-normal text-neutral-600"
              >
                {w}
              </span>
            ))}
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex w-5 flex-col">
              {Array.from({ length: endAt - startAt }).map((_, i) => {
                const h = startAt + i;
                return (
                  <span key={i} className="h-10 text-right text-xs font-normal text-neutral-600">
                    {String(h).padStart(2, '0')}
                  </span>
                );
              })}
            </div>
            {/*<Schedule />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
