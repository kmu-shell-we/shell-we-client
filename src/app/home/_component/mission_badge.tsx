import { ComponentType, SVGProps } from 'react';

import { TypeColor } from '@/types/colors';
import { MissionType } from '@/types/missions';
import { MoonIcon } from '@heroicons/react/20/solid';
import { TicketIcon } from '@heroicons/react/20/solid';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

import Badge from '@/components/ui/badge';

interface Props {
  type: MissionType;
}

type MissionInfo = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  color: TypeColor;
};

const missions: Record<MissionType, MissionInfo> = {
  DAILY: {
    icon: MoonIcon,
    text: '일간 미션',
    color: 'white',
  },
  WEEKLY: {
    icon: TicketIcon,
    text: '주간 미션',
    color: 'white',
  },
  SPECIAL: {
    icon: RocketLaunchIcon,
    text: '특별 미션',
    color: 'success',
  },
} as const;

export default function MissionBadge({ type }: Props) {
  const { icon: Icon, text, color } = missions[type];
  return (
    <Badge size="xs" color={color}>
      <Icon className="h-3 w-3" />
      {text}
    </Badge>
  );
}
