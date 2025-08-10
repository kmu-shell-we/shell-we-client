'use client';

import Image from 'next/image';

import { TeamPhoto } from '@/types/gallery';

type Props = {
  teamName: string;
  photos: TeamPhoto[];
};

export default function GalleryItem({ teamName, photos }: Props) {
  const items = photos.slice(0, 3);

  return (
    <section className="w-full">
      <h3 className="text-center text-base font-normal text-black">{teamName}</h3>
      <div className="flex flex-row gap-2">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="overflow-hidden rounded-xl bg-gray-300"
            style={{ width: 120, height: 120 }}
          >
            <Image
              src={item.url}
              alt={item.alt ?? 'team photo'}
              width={120}
              height={120}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
