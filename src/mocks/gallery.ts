import type { TeamBlock } from '@/types/gallery';

export const MOCK_TEAM: TeamBlock = {
  id: '1',
  teamName: 'Example Team',
  photos: [
    {
      id: '1',
      url: '/images/sample1.jpg',
      title: '첫 번째 미션',
      description: '첫 번째 미션 설명',
      date: '2025-08-12',
    },
  ],
};
