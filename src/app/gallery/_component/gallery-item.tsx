'use client';

import Image from 'next/image';

import { TeamPhoto } from '@/types/gallery';

type Props = {
  teamName: string;
  photos: TeamPhoto[];
};

export default function GalleryItem({ teamName, photos }: Props) {
  return (
    <section className="flex w-full flex-col items-start gap-2">
      <h3 className="text-base font-normal text-black">{teamName}</h3>
      <div className="flex flex-row gap-2 overflow-x-auto">
        {photos.map((item) => (
          <div
            key={item.id}
            className="h-[120px] w-[120px] flex-shrink-0 overflow-hidden bg-gray-300"
          >
            <Image
              src={item.url}
              alt={item.title ?? 'team photo'}
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
