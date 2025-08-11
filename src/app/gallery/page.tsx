'use client';

import type { TeamBlock } from '@/types/gallery';

import GalleryItem from '@/app/gallery/_component/gallery-item';

export default function GalleryPage() {
  const teams: TeamBlock[] = [];

  return (
    <div className="flex flex-col items-start gap-6 self-stretch px-6">
      {teams.map((t) => (
        <GalleryItem key={t.teamName} teamName={t.teamName} photos={t.photos} />
      ))}
    </div>
  );
}
