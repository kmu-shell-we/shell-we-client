import { ComponentType, SVGProps, useEffect, useRef, useState } from 'react';

import { ArrowPathIcon, BeakerIcon, BoltIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface RouletteIcon {
  angle: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export default function Roulette() {
  const icons: RouletteIcon[] = [
    { angle: 45, Icon: BeakerIcon, color: 'text-red-500' },
    { angle: 135, Icon: XMarkIcon, color: 'text-gray-500' },
    { angle: 225, Icon: ArrowPathIcon, color: 'text-yellow-500' },
    { angle: 315, Icon: BoltIcon, color: 'text-green-500' },
  ];

  const [rotation, setRotation] = useState(0);
  const [iconDistance, setIconDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 처음 화면 구성 할 때 지름 가져오기
  useEffect(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      setIconDistance(width * 0.3);
    }
  }, []);

  //룰렛 회전 시키기 기본으로 3바퀴는 돌도록 설정
  const handleSpin = () => {
    const extraSpin = Math.floor(Math.random() * 360);
    setRotation((prev) => prev + 3 * 360 + extraSpin);
  };

  return (
    <>
      <span className="leading-none text-rose-600">▼</span>
      <div className="relative aspect-square w-full" ref={containerRef}>
        <div
          className="h-full w-full rounded-full shadow transition-transform duration-[3000ms]"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="h-full w-full rounded-full bg-[conic-gradient(#F0FDF4_0deg_90deg,#FEF2F2_90deg_180deg,#F5F5F5_180deg_270deg,#FFF8E8_270deg_360deg)]" />

          {icons.map(({ angle, Icon, color }, i) => (
            <Icon
              key={i}
              className={`absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 ${color}`}
              style={{
                // 위에 계산한 반지름의 60프로 정도로 룰렛 중앙으로 부터의 아이콘 위치 설정
                transform: `rotate(${angle}deg) translate(${iconDistance}px) rotate(-${angle}deg)`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-700">
            <button className="cursor-pointer font-medium text-white" onClick={handleSpin}>
              뽑기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
