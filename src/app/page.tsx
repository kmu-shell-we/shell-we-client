'use client';

import { overlay } from 'overlay-kit';

import MissionVerifyModal from '@/app/home/_component/mission_verify_modal';

import ItemMenu from '@/components/layout/item-menu';

export default function Home() {
  return (
    <div>
      <div className="flex items-start p-6">
        <ItemMenu />
      </div>
      메인 페이지
      <button
        onClick={() => {
          overlay.open(({ isOpen, close }) => (
            <MissionVerifyModal
              open={isOpen}
              onClose={close}
              name="Test"
              description="test"
              point={100}
            />
          ));
          console.log('clicked');
        }}
      >
        test
      </button>
    </div>
  );
}
