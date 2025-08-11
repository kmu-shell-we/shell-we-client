'use client';

import Image from 'next/image';

import { CalendarIcon } from '@heroicons/react/20/solid';

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
};

export default function GalleryDetailItem({ imageUrl, title, description, date }: Props) {
  return (
    <section className="flex flex-col items-start justify-center gap-2">
      <div className="h-[162px] w-[162px] overflow-hidden rounded-xl">
        <Image src={imageUrl} alt="미션 이미지" width={162} height={162} className="object-cover" />
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
