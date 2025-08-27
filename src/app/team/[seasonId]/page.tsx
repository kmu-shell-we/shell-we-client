'use client';

import { use, useEffect, useState } from 'react';

import { useApi } from '@/hook/use-api';
import { ClockIcon, PlusIcon } from '@heroicons/react/20/solid';
import { overlay } from 'overlay-kit';

import Profile from '@/app/team/_component/profile';
import ScheduleUploadModal from '@/app/team/_component/schedule-upload-modal';

import ItemMenu from '@/components/layout/item-menu';
import LoadingScreen from '@/components/ui/loading-screen';
import RoundedBadge from '@/components/ui/rounded-badge';

import Api from '@/api';
import { TeamResponse } from '@/api/dto/team';
import { SimpleUserResponse } from '@/api/dto/user';

import { useUserStore } from '@/store/user';

//import Schedule from ''@/app/team/_component/schedule/schedule;

interface Props {
  params: Promise<{ seasonId: string }>;
}

const startAt = 9;
const endAt = 18;
const day = ['월', '화', '수', '목', '금'];

export default function TeamPage(props: Props) {
  const { seasonId } = use(props.params);

  const { user } = useUserStore();

  const [isProcessing, startApi] = useApi();
  const [teamUsers, setTeamUsers] = useState<SimpleUserResponse[]>([]);
  const [teamInfo, setTeamInfo] = useState<TeamResponse>();

  useEffect(() => {
    if (!user) return;

    startApi(async () => {
      const response = await Api.Domain.Team.getMyTeamInfo(seasonId);

      setTeamInfo(response.team);
      setTeamUsers(response.users);
    });
  }, [user, seasonId]);

  const handleOpen = () => {
    overlay.open(({ isOpen, close }) => <ScheduleUploadModal open={isOpen} onClose={close} />);
  };

  return (
    <div className="flex flex-col gap-y-6 bg-white px-6">
      <ItemMenu />
      {isProcessing ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="flex justify-center">
            <RoundedBadge size="default" variant="white">
              <ClockIcon className="h-6 w-6" />
              {teamInfo?.point}
            </RoundedBadge>
          </div>

          <div className="flex flex-col gap-y-4">
            <span className="text-xl font-semibold">팀원</span>

            <div className="grid grid-cols-2 gap-4">
              {teamUsers.map((user) => (
                <Profile key={user.id} name={user.name} avatar={user.avatar} />
              ))}
            </div>
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
                      <span
                        key={i}
                        className="h-10 text-right text-xs font-normal text-neutral-600"
                      >
                        {String(h).padStart(2, '0')}
                      </span>
                    );
                  })}
                </div>
                {/* <Schedule /> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
