import { CheckIcon, StarIcon } from '@heroicons/react/20/solid';

import MissionBadge from '@/app/home/_component/mission_badge';
import { MissionType } from '@/app/types/missions';

import Button from '@/components/ui/button';

interface MissionProps {
  name: string;
  description: string;
  point: number;
  type: MissionType;
}

export default function Mission({ name, description, point, type }: MissionProps) {
  return (
    <div className="flex w-fit flex-col gap-y-6 rounded-xl border border-neutral-300 bg-white px-4 py-6">
      <div className="flex flex-col gap-y-2">
        <div className="flex w-[168px] justify-between">
          <MissionBadge type={type} />
          <div className="flex items-center text-sm font-semibold text-green-500">
            <span>+{point}</span>
            <StarIcon className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="font-medium">
          <span className="block">{name}</span>
          <span className="block text-sm text-gray-600">{description}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Button color="primary" size="small" outlined={false} className="flex">
          <CheckIcon className="h-4 w-4" />
          <span className="font-normal">인증하기</span>
        </Button>
      </div>
    </div>
  );
}
