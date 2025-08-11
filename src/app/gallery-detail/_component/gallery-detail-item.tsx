'use client';

import Image from 'next/image';

import { TeamPhoto } from '@/types/gallery';
import { CalendarIcon } from '@heroicons/react/20/solid';

type Props = Omit<TeamPhoto, 'id'>;

export default function GalleryDetailItem({ url, title, description, date }: Props) {
  return (
    <section className="flex flex-col items-start justify-center gap-2">
      <div className="h-[280px] w-[280px] overflow-hidden rounded-xl">
        <Image src={url} alt={title} width={280} height={280} className="object-cover" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-base font-medium text-black">{title}</p>
        <p className="text-sm font-normal text-gray-500">{description}</p>
        <div className="flex flex-row items-center gap-1 text-xs font-normal text-gray-500">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>
    </section>
  );
}
