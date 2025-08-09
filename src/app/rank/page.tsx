import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

import TeamRankCard from '@/app/home/_component/team_rank_card';

export default function RankPage() {
  return (
    <div className="flex flex-col gap-y-8 px-6 pb-7">
      <div className="flex gap-2 text-gray-600">
        <ArrowLongLeftIcon className="h-5 w-5" />
        <span className="text-sm font-medium">뒤로가기</span>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="text-xl font-semibold">랭킹</span>

        {/*TODO: 추후에 랭킹 불러오기*/}
        <div className="flex flex-col gap-y-4">
          <TeamRankCard rank={1} name="team A" point={1500} />
          <TeamRankCard rank={2} name="team A" point={1000} />
          <TeamRankCard rank={3} name="team A" point={500} />
          <TeamRankCard rank={4} name="team A" point={100} />
        </div>
      </div>
    </div>
  );
}
