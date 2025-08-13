import { ArrowPathIcon, BeakerIcon, ClockIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { BoltIcon } from '@heroicons/react/20/solid';

import PossibilityCard from '@/app/item/_component/possibility_card';
import Roulette from '@/app/item/_component/roulette';

import ItemMenu from '@/components/layout/item-menu';
import RoundedBadge from '@/components/ui/rounded-badge';

export default function ItemPage() {
  return (
    <div className="w-94 bg-white">
      <div className="flex w-full flex-col gap-y-6 bg-white px-6 pb-7">
        <ItemMenu />
        <div className="flex justify-center">
          <RoundedBadge size="default" variant="white">
            <ClockIcon className="h-6 w-6" />
            D-100
          </RoundedBadge>
        </div>

        <Roulette />

        <div className="flex flex-col items-center gap-y-6">
          <div>
            <span className="font-normal text-gray-500">비용: </span>
            <span className="font-semibold text-gray-700">100P</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4">
          <span className="text-xl font-semibold">확률</span>
          <div>
            <PossibilityCard
              icon={BoltIcon}
              title="경험치 2배"
              description="다음 미션 경험치 2배"
              percent={25}
              bgColor="bg-green-50"
              color="text-green-500"
            />
            <PossibilityCard
              icon={ArrowPathIcon}
              title="미션 초기화"
              description="오늘의 미션 하나 초기화"
              percent={15}
              bgColor="bg-amber-50"
              color="text-amber-500"
            />
            <PossibilityCard
              icon={BeakerIcon}
              title="점수 깍기"
              description="랜덤 팀 점수 50p 깍기"
              percent={10}
              bgColor="bg-red-50"
              color="text-red-500"
            />
            <PossibilityCard
              icon={XMarkIcon}
              title="꽝"
              description="아무것도 얻지 못했습니다"
              percent={50}
              bgColor="bg-gray-50"
              color="text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
