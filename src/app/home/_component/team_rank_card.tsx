import { StarIcon } from '@heroicons/react/20/solid';

interface RankProp {
  rank: number;
  name: string;
  point: number;
}

export default function TeamRankCard({ rank, name, point }: RankProp) {
  return (
    <div className="flex w-fit gap-4 rounded-xl border border-neutral-300 bg-white px-6 py-2.5 font-medium text-black">
      <span className="text-xl font-bold">{rank} </span>
      <div className="flex items-center justify-between gap-6">
        {name}
        <div className="flex items-center gap-1 text-sm">
          <span>{point}</span>
          <StarIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
