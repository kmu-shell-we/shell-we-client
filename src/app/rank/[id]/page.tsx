'use client';

import { use, useEffect, useState } from 'react';

import { useApi } from '@/hook/use-api';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

import TeamRankCard from '@/app/home/_component/team_rank_card';

import LoadingScreen from '@/components/ui/loading-screen';

import Api from '@/api';
import { SimpleTeamResponse } from '@/api/dto/team';

import { useUserStore } from '@/store/user';

interface Props {
  params: Promise<{ id: string }>;
}

export default function RankPage(props: Props) {
  const { id: seasonId } = use(props.params);

  const { user } = useUserStore();

  const [isProcessing, startApi] = useApi();
  const [teamList, setTeamList] = useState<SimpleTeamResponse[]>([]);

  useEffect(() => {
    if (!user) return;

    startApi(async () => {
      const response = await Api.Domain.Team.getTeamList(seasonId);

      setTeamList(response.teams);
    });
  }, [user, seasonId]);

  return (
    <>
      {isProcessing ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col gap-y-8 px-6 pb-7">
          <div className="flex gap-2 text-gray-600">
            <ArrowLongLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">뒤로가기</span>
          </div>

          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-semibold">랭킹</span>

            <div className="flex flex-col gap-y-4">
              {teamList.map((team, index) => (
                <TeamRankCard
                  key={team.id}
                  rank={index + 1}
                  name={team.name}
                  point={team.experience}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
