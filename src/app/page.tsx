'use client';

import Roulette from '@/app/item/_component/roulette';

export default function Home() {
  return (
    <Roulette />
    // <div>
    //   <div className="flex items-start p-6">
    //     <ItemMenu />
    //   </div>
    //   메인 페이지
    //   <button
    //     onClick={() => {
    //       overlay.open(({ isOpen, close }) => (
    //         <MissionVerifyModal
    //           open={isOpen}
    //           onClose={close}
    //           name="Test"
    //           description="test"
    //           point={100}
    //         />
    //       ));
    //       console.log('clicked');
    //     }}
    //   >
    //     test
    //   </button>
    // </div>
  );
}
