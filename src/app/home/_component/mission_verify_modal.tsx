'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { CheckIcon, PhotoIcon, StarIcon } from '@heroicons/react/20/solid';

import Button from '@/components/ui/button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  description: string;
  point: number;
}

export default function MissionVerifyModal({
  open,
  onClose,
  name,
  description,
  point,
}: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const viewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageUrl(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex w-[320] flex-col gap-y-4 rounded-xl bg-white px-6 py-6">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">미션 인증</span>
          <span className="text-sm font-normal text-gray-500">
            사진을 업로드해서 미션을 완료하세요
          </span>
        </div>

        <div className="flex flex-col rounded-xl bg-blue-50 px-4 py-4">
          <div className="flex items-center justify-between font-semibold">
            <span className="text-base text-blue-900">{name}</span>
            <div className="xs flex items-center font-semibold text-blue-600">
              <span>+{point}</span>
              <StarIcon className="h-3.5 w-3.5" />
            </div>
          </div>
          <span className="text-xs font-normal text-blue-600">{description}</span>
        </div>

        {!imageUrl && (
          <div
            className="flex flex-col items-center gap-y-2 rounded-lg border-3 border-dashed border-gray-300 py-8"
            onClick={handleClick}
          >
            <div className="flex h-[56] w-[56] items-center justify-center rounded-full bg-gray-100">
              <PhotoIcon className="h-6 w-6 text-gray-400" />
            </div>
            <span className="text-sm font-medium">사진을 올려주세요</span>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              className="hidden"
              onChange={viewImage}
            />
          </div>
        )}

        {imageUrl && (
          <div className="flex flex-col items-center gap-y-2 rounded-lg border-3 border-dashed border-green-500 bg-green-50 py-8">
            <Image
              src={imageUrl}
              alt="사진이 선택 되었습니다"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <span className="text-sm font-medium text-green-500">사진이 선택 되었습니다</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button color="white" size="small" outlined={true} className="flex-1" onClick={onClose}>
            <span className="font-normal">닫기</span>
          </Button>
          <Button
            color="primary"
            size="small"
            outlined={false}
            className="flex-1"
            disabled={!imageUrl}
          >
            <CheckIcon className="h-4 w-4" />
            <span className="font-normal">인증하기</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
