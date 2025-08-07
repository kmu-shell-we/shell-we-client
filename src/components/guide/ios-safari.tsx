'use client';

import { ArrowUpIcon, EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/outline';

import Logo from '@/components/ui/logo';

export default function IOSGuide() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <Logo size="xl" />
        <h2 className="text-base font-semibold">앱 설치 가이드</h2>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold">Step 1</h2>
          <div className="flex flex-row items-center gap-1 text-gray-700">
            <p>화면 우측 하단 더보기 버튼</p>
            <EllipsisHorizontalIcon className="h-4 w-4" />
            <p>을 눌러주세요</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold">Step 2</h2>
          <div className="flex flex-row items-center gap-1 text-gray-700">
            <p>팝업 메뉴의 공유 버튼</p>
            <ArrowUpIcon className="h-4 w-4" />
            <p>을 눌러주세요</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold">Step 3</h2>
          <div className="flex flex-row items-center gap-1 text-gray-700">
            <p>홈 화면에 추가</p>
            <PlusIcon className="h-4 w-4" />
            <p>를 눌러 앱을 설치해주세요</p>
          </div>
        </div>
      </div>
    </div>
  );
}
