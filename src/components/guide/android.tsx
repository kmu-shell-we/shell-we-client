'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

import Logo from '@/components/ui/logo';

export default function AndroidGuide() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <Logo size="xl" />
        <h2 className="text-base font-semibold">앱 설치 가이드</h2>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-base font-semibold">Step 1</h2>
        <div className="flex flex-row items-center gap-1 text-gray-700">
          <p>화면 우측 하단 더보기 버튼</p>
          <EllipsisHorizontalIcon className="h-4 w-4" />
          <p>을 눌러주세요</p>
        </div>
      </div>
    </div>
  );
}
