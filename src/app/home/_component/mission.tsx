'use client';

import { CheckIcon, StarIcon } from '@heroicons/react/20/solid';
import { overlay } from 'overlay-kit';

import MissionBadge from '@/app/home/_component/mission_badge';
import MissionVerifyModal from '@/app/home/_component/mission_verify_modal';
import { MissionType } from '@/app/types/missions';

import Button from '@/components/ui/button';

interface MissionProps {
  name: string;
  description: string;
  point: number;
  type: MissionType;
  clear: boolean;
}

export default function Mission({ name, description, point, type, clear }: MissionProps) {
  return (
    <div className="flex w-full flex-col gap-y-6 rounded-xl border border-neutral-300 bg-white px-4 py-6">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <MissionBadge type={type} />
          <div className="flex items-center text-sm font-semibold text-green-500">
            <span>+{point}</span>
            <StarIcon className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="flex flex-col font-medium">
          <span>{name}</span>
          <span className="text-sm text-gray-600">{description}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          color="primary"
          size="small"
          outlined={false}
          disabled={clear}
          className="flex"
          onClick={() => {
            overlay.open(({ isOpen, close }) => (
              <MissionVerifyModal
                open={isOpen}
                onClose={close}
                name="Test"
                description="test"
                point={1500}
              />
            ));
          }}
        >
          <CheckIcon className="h-4 w-4" />
          <span className="font-normal">인증하기</span>
        </Button>
      </div>
    </div>
  );
}
