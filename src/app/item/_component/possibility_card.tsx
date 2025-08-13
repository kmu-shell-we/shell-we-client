import { ComponentType, SVGProps } from 'react';

import { cn } from '@/lib/utils';

type ItemInfo = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  percent: number;
  bgColor: string;
  color: string;
};

export default function PossibilityCard({
  icon: Icon,
  title,
  description,
  percent,
  bgColor,
  color,
}: ItemInfo) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={cn('flex h-16 w-16 items-center justify-center rounded-full', bgColor)}>
          <Icon className={cn('h-6 w-6', color)} />
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
