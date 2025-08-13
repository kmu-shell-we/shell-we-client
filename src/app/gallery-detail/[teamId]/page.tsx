'use client';

import { useRouter } from 'next/navigation';

import { MOCK_TEAM } from '@/mocks/gallery';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

import GalleryDetailItem from '@/app/gallery-detail/_component/gallery-detail-item';

interface Props {
  params: {
    teamId: string;
  };
}

export default function Page({ params: { teamId } }: Props) {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center gap-6 px-6">
      <div className="flex flex-row items-center gap-1 text-sm font-normal text-gray-600">
        <ArrowLongLeftIcon className="h-5 w-5" />
        <button onClick={() => router.back()}>뒤로 가기</button>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        {MOCK_TEAM.photos.map((photo) => (
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
