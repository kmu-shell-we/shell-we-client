'use client';

import { useEffect, useRef, useState } from 'react';

import Logo from '@/components/ui/logo';

const ITEM_HEIGHT = 60;

export default function WaveAnimation() {
  const scrollListRef = useRef(null);
  const [firstItemText, setFirstItemText] = useState('Connect');
  const [hideOtherItems, setHideOtherItems] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setFirstItemText('Everything'), 5300);
    const hideTimer = setTimeout(() => setHideOtherItems(true), 6400);

    const redirectTimer = setTimeout(() => {
      window.location.href = '/auth';
    }, 7000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  const listItems = [
    { text: firstItemText },
    { text: 'Play' },
    { text: 'Meet' },
    { text: 'Everything' },
  ];

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-60 bg-white px-6 text-gray-600">
      <style>{`
        @keyframes stepScroll {
          0%,15%   { transform: translateY(0); }
          20%,35%  { transform: translateY(-60px); }
          40%,55%  { transform: translateY(-120px); }
          60%,75%  { transform: translateY(-180px); }
          80%,100% { transform: translateY(0); }
        }
      `}</style>

      <div className="flex items-center gap-5">
        <Logo size="2xl" />

        <div
          className="relative overflow-hidden"
          style={{
            height: `${ITEM_HEIGHT}px`,
          }}
        >
          {/* 위쪽 페이드 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 z-10 h-[30px] bg-gradient-to-b from-white to-transparent"
            style={{
              top: '0px',
              left: '-20px',
              right: '-20px',
            }}
          />
          {/* 아래쪽 페이드 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 z-10 h-[30px] bg-gradient-to-t from-white to-transparent"
            style={{
              bottom: '0px',
              left: '-20px',
              right: '-20px',
            }}
          />

          <ul
            ref={scrollListRef}
            className="flex animate-[stepScroll_8s_linear_forwards] list-none flex-col motion-reduce:animate-none"
          >
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="text-2xl leading-[60px] font-light whitespace-nowrap transition-opacity"
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  opacity: hideOtherItems && idx !== 0 ? 0 : 1,
                  transitionDuration: '0s',
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* auth 페이지 로고 위치 맞추기 용*/}
      <div className="flex w-full justify-center">
        <div className="h-10 w-full max-w-[320px]"></div>
      </div>
    </div>
  );
}
