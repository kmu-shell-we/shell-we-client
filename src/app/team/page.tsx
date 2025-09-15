'use client';

import { useMemo, useState } from 'react';

import { CountsDays } from '@/types/schedule';
import { OneResponse, countsFromMany, countsFromOne } from '@/utils/scheduleCounts';
import { ClockIcon, PlusIcon } from '@heroicons/react/20/solid';
import { overlay } from 'overlay-kit';
import { map } from 'zod';

import Profile from '@/app/team/_component/profile';
import ScheduleUploadModal from '@/app/team/_component/schedule-upload-modal';
import Schedule from '@/app/team/_component/schedule/schedule';

import RoundedBadge from '@/components/ui/rounded-badge';

// 데모 데이터
type Person = { id: string; name: string; avatar: string; data: OneResponse };

const people: Person[] = [
  {
    id: '1',
    name: '김문기',
    avatar: '',
    data: [
      { dayOfWeek: 'MONDAY', lecture: [{ startAt: '09:00', endAt: '10:30' }] },
      { dayOfWeek: 'WEDNESDAY', lecture: [{ startAt: '09:00', endAt: '10:30' }] },
    ],
  },
  {
    id: '2',
    name: '김아리',
    avatar: '',
    data: [{ dayOfWeek: 'MONDAY', lecture: [{ startAt: '09:30', endAt: '11:00' }] }],
  },
];

export default function TeamPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const daysCount = 5; // 월~금

  const countsDays: CountsDays = useMemo(() => {
    if (selectedId) {
      const p = people.find((p) => p.id === selectedId);
      return p
        ? countsFromOne(p.data, daysCount)
        : (new Array(daysCount).fill(undefined) as CountsDays);
    }
    return countsFromMany(
      people.map((p) => p.data),
      daysCount
    );
  }, [selectedId]);

  const startAt = '09:00';
  const endAt = '18:00';
  const day = ['월', '화', '수', '목', '금'];

  const handleOpen = () => {
    overlay.open(({ isOpen, close }) => <ScheduleUploadModal open={isOpen} onClose={close} />);
  };

  return (
    <div className="flex flex-col gap-y-6 bg-white px-6">
      {/*Todo: 남은 기간 바꾸기*/}
      <div className="flex justify-center">
        <RoundedBadge size="default" variant="white">
          <ClockIcon className="h-6 w-6" />
          D-100
        </RoundedBadge>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="text-xl font-semibold">팀원</span>

        <ul className="grid grid-cols-2 gap-4">
          {people.map((p) => {
            const active = p.id === selectedId;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(active ? null : p.id)}
                  className={`w-full rounded-lg p-3 ${active ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <Profile name={p.name} avatar={p.avatar ?? ''} />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full flex-col gap-y-4">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">시간표</span>
          <button onClick={handleOpen}>
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row pl-9">
            <div className="flex flex-1">
              {day.map((w, i) => (
                <span key={i} className="flex-1 text-center text-xs font-normal text-neutral-600">
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex w-5 flex-col">
              {(() => {
                const [sH] = startAt.split(':').map(Number);
                const [eH, eM] = endAt.split(':').map(Number);
                const endHour = eM === 0 ? eH : eH + 1;
                const len = Math.max(0, endHour - sH);
                return Array.from({ length: len }).map((_, i) => {
                  const h = sH + i;
                  return (
                    <span key={i} className="h-10 text-right text-xs font-normal text-neutral-600">
                      {String(h).padStart(2, '0')}
                    </span>
                  );
                });
              })()}
            </div>
            <div className="min-w-0 flex-1">
              <Schedule
                key={selectedId ?? 'all'}
                startAt={startAt}
                endAt={endAt}
                countsDays={countsDays}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
