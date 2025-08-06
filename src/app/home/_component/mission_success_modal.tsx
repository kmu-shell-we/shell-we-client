'use client';

import { useEffect, useState } from 'react';

import { GiftIcon, StarIcon } from '@heroicons/react/20/solid';

import Modal from '@/components/modal/modal';
import Button from '@/components/ui/button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  point: number;
}

export default function MissionSuccessModal({ open, onClose, name, point }: ModalProps) {
  const [score, setScore] = useState(0);
  const finalScore = point;

  useEffect(() => {
    const duration = 300;
    const startTime = Date.now();

    const animationStart = () => {
      const now = Date.now();
      const lapse = now - startTime;
      const progress = Math.min(lapse / duration, 1);
      const currentScore = Math.floor(finalScore * progress);

      setScore(currentScore);

      if (progress < 1) {
        requestAnimationFrame(animationStart);
      } else {
        setScore(finalScore);
      }
    };

    requestAnimationFrame(animationStart);
  }, []);

  if (!open) return null;

  return (
    <Modal>
      <div className="flex w-75 flex-col items-center gap-y-4 rounded-xl bg-white px-6 py-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <GiftIcon className="h-6 w-6 text-green-500" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-semibold">미션 완료</span>
          <span className="text-sm font-medium text-gray-600">{name} 을 완료 했어요!</span>
        </div>
        <div className="flex w-full flex-col items-center gap-y-1 rounded-xl bg-amber-50 py-4 font-semibold shadow-sm">
          <span className="text-gray-700">획득 점수</span>
          <div className="flex items-center text-xl text-amber-500">
            <span>+{score}</span>
            <StarIcon className="h-5 w-5" />
          </div>
        </div>
        <Button color="white" size="small" outlined={true} onClick={onClose} className="w-full">
          <span className="font-normal">확인</span>
        </Button>
      </div>
    </Modal>
  );
}
