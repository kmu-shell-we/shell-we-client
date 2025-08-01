import { MoonIcon } from '@heroicons/react/20/solid';
import { TicketIcon } from '@heroicons/react/20/solid';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

import Badge from '@/components/ui/badge';

type Mission_type = 'DAILY' | 'WEEKLY' | 'SPECIAL';
type Props = {
  missionType: Mission_type;
};

export default function MissionBadge({ missionType }: Props) {
  const missions = {
    DAILY: {
      icon: <MoonIcon className="h-3 w-3" />,
      text: '일간 미션',
      color: 'white',
    },
    WEEKLY: {
      icon: <TicketIcon className="h-3 w-3" />,
      text: '주간 미션',
      color: 'white',
    },
    SPECIAL: {
      icon: <RocketLaunchIcon className="h-3 w-3" />,
      text: '특별 미션',
      color: 'success',
    },
  } as const;

  const { icon, text, color } = missions[missionType];
  return (
    <Badge size={'xs'} color={color}>
      {icon}
      {text}
    </Badge>
  );
}
