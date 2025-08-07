import { ComponentType, SVGProps } from 'react';

import { ItemType } from '@/types/item';
import { ArrowPathIcon, BeakerIcon, BoltIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  type: ItemType;
}

type ItemInfo = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  percent: number;
  bgColor: string;
  color: string;
};

const items: Record<ItemType, ItemInfo> = {
  double: {
    icon: BoltIcon,
    title: '경험치 2배',
    description: '다음 미션 경험치 2배',
    percent: 25,
    bgColor: 'bg-green-50',
    color: 'text-green-500',
  },
  reset: {
    icon: ArrowPathIcon,
    title: '미션 초기화',
    description: '오늘의 미션 하나 초기화',
    percent: 15,
    bgColor: 'bg-amber-50',
    color: 'text-amber-500',
  },
  attack: {
    icon: BeakerIcon,
    title: '점수 깍기',
    description: '랜덤 팀 점수 50p 깍기',
    percent: 10,
    bgColor: 'bg-red-50',
    color: 'text-red-500',
  },
  boom: {
    icon: XMarkIcon,
    title: '꽝',
    description: '아무것도 얻지 못했습니다',
    percent: 50,
    bgColor: 'bg-gray-50',
    color: 'text-gray-500',
  },
};

export default function PossibilityCard({ type }: Props) {
  const { icon: Icon, title, description, percent, bgColor, color } = items[type];

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center rounded-full ${bgColor} h-16 w-16`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-sm font-medium text-gray-500">{description}</span>
        </div>
      </div>

      <div>
        <span className="font-medium text-gray-700">{percent}%</span>
      </div>
    </div>
  );
}
