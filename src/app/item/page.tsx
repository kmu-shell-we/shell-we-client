import { ClockIcon } from '@heroicons/react/20/solid';

import PossibilityCard from '@/app/item/_component/possibility_card';

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

        <div className="flex flex-col items-center gap-y-6">
          {/*TODO:추후에 룰렛 컴포넌트 삽입*/}
          <div>
            <span className="font-normal text-gray-500">비용: </span>
            <span className="font-semibold text-gray-700">100P</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-4">
          <span className="text-xl font-semibold">확률</span>
          <div>
            <PossibilityCard type="double" />
            <PossibilityCard type="reset" />
            <PossibilityCard type="attack" />
            <PossibilityCard type="boom" />
          </div>
        </div>
      </div>
    </div>
  );
}
