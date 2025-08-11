import { ComponentType, ReactNode, SVGProps } from 'react';

import { ItemType } from '@/types/item';
import {
  ArrowDownIcon,
  ArrowPathIcon,
  BeakerIcon,
  BoltIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

import Modal from '@/components/modal/modal';
import Button from '@/components/ui/button';

import { cn } from '@/lib/utils';

interface ItemModalProps {
  type: ItemType;
  open: boolean;
  onClose: () => void;
}

type ItemInfo = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  bgColor: string;
  color: string;
  element?: ReactNode;
};

const items: Record<ItemType, ItemInfo> = {
  double: {
    icon: BoltIcon,
    title: '경험치 2배',
    description: '다음 미션 경험치 2배',
    bgColor: 'bg-green-50',
    color: 'text-green-500',
  },
  reset: {
    icon: ArrowPathIcon,
    title: '미션 초기화',
    description: '오늘의 미션 하나 초기화',
    bgColor: 'bg-amber-50',
    color: 'text-amber-500',
    element: (
      <div className="flex w-full flex-col items-center gap-y-1 rounded-xl bg-amber-50 py-4">
        <span className="font-semibold text-gray-700">이전 미션 이름</span>
        <ArrowDownIcon className="h-5 w-5" />
        <span className="font-semibold text-gray-700">새로운 미션 이름</span>
        <span className="text-sm font-normal text-gray-500">미션 설명</span>
      </div>
    ),
  },
  attack: {
    icon: BeakerIcon,
    title: '점수 깍기',
    description: '랜덤 팀 점수 50p 깍기',
    bgColor: 'bg-red-50',
    color: 'text-red-500',
    element: (
      <div className="flex w-full flex-col items-center gap-y-1 rounded-xl bg-red-50 py-4">
        <span className="font-semibold text-gray-700">팀 이름</span>
        <div className="flex items-center text-xl font-semibold text-red-500">
          <span>50</span>
          <StarIcon className="h-5 w-5" />
        </div>
      </div>
    ),
  },
  boom: {
    icon: XMarkIcon,
    title: '꽝',
    description: '아무것도 얻지 못했습니다',
    bgColor: 'bg-gray-50',
    color: 'text-gray-500',
  },
};

export default function ItemResultModal({ type, open, onClose }: ItemModalProps) {
  const { icon: Icon, title, description, bgColor, color, element } = items[type];

  if (!open) return null;
  return (
    <Modal>
      <div className="flex w-75 flex-col items-center gap-y-4 rounded-xl bg-white px-6 py-6">
        <div className={cn('flex h-16 w-16 items-center justify-center rounded-full', bgColor)}>
          <Icon className={cn('h-6 w-6', color)} />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-sm font-medium text-gray-600">{description}</span>
        </div>

        {element && element}

        <Button color="white" size="small" outlined={true} onClick={onClose} className="w-full">
          확인
        </Button>
      </div>
    </Modal>
  );
}
