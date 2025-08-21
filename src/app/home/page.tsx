'use client';

import { ClockIcon, PlusIcon } from '@heroicons/react/20/solid';

import Mission from '@/app/home/_component/mission';
import TeamRankCard from '@/app/home/_component/team_rank_card';

import RoundedBadge from '@/components/ui/rounded-badge';

export default function HomePage() {
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
        <span className="text-xl font-semibold">미션 목록</span>

        <div className="scrollbar-hide overflow-x-auto">
          <div className="flex gap-4">
            <div className="w-50 flex-shrink-0">
              <Mission
                name={'미션 1'}
                description={'미션 설명'}
                point={100}
                type="DAILY"
                clear={true}
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <Mission
                name={'미션 2'}
                description={'미션 설명'}
                point={100}
                type="SPECIAL"
                clear={false}
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <Mission
                name={'미션 3'}
                description={'미션 설명'}
                point={100}
                type="DAILY"
                clear={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-4">
        <div className="flex justify-between">
          <span className="font=semibold text-xl">랭킹</span>
          <PlusIcon className="h-5 w-5" />
        </div>

        <div className="flex flex-col gap-y-4">
          <TeamRankCard rank={1} name={'Team A'} point={1500} />
          <TeamRankCard rank={2} name={'Team B'} point={1000} />
          <TeamRankCard rank={3} name={'Team C'} point={100} />
        </div>
      </div>
    </div>
  );
}
