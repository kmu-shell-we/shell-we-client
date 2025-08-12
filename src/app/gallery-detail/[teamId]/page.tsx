'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import type { TeamBlock } from '@/types/gallery';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

import GalleryDetailItem from '@/app/gallery-detail/_component/gallery-detail-item';

export default function Page() {
  const { teamId } = useParams();

  // 임시 데이터
  const team: TeamBlock = {
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

  return (
    <section className="flex flex-col items-center justify-center gap-6 px-6">
      <div className="flex flex-row items-center gap-1 text-sm font-normal text-gray-600">
        <ArrowLongLeftIcon className="h-5 w-5" />
        <Link href="/gallery">뒤로 가기</Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        {team.photos.map((photo) => (
          <GalleryDetailItem
            key={photo.id}
            url={photo.url}
            title={photo.title}
            description={photo.description}
            date={photo.date}
          />
        ))}
      </div>
    </section>
  );
}
