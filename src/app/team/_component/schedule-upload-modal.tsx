'use client';

import { useState } from 'react';

import {
  ArrowLongRightIcon,
  ArrowRightIcon,
  CogIcon,
  DocumentArrowUpIcon,
} from '@heroicons/react/20/solid';

import Modal from '@/components/modal/modal';
import Button from '@/components/ui/button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ScheduleUploadModal({ open, onClose }: ModalProps) {
  const [url, setUrl] = useState('');

  const disabled = !url.trim();

  if (!open) return null;

  return (
    <Modal>
      <div className="relative flex w-82 flex-col items-start justify-center gap-6 rounded-xl bg-white px-6 py-6">
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold">시간표 업로드</h3>
          <div className="flex flex-row items-center justify-center gap-1 text-sm text-gray-500">
            <p>에브리타임</p>
            <ArrowLongRightIcon className="h-4 w-4" />
            <p>시간표</p>
            <ArrowRightIcon className="h-4 w-4" />
            <CogIcon className="h-4 w-4" />
            <ArrowLongRightIcon className="h-4 w-4" />
            <p>URL 공유</p>
          </div>
        </div>

        <label className="w-full">
          <div className="rounded-1 flex w-full cursor-pointer items-center border border-gray-300 px-3 py-2">
            <input
              type="url"
              placeholder="에브리타임 시간표 URL을 입력해주세요"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full placeholder-gray-400 outline-none"
            />
          </div>
        </label>

        <div className="flex w-full flex-row items-center justify-center gap-2">
          <Button color="white" size="small" outlined={true} className="flex-1" onClick={onClose}>
            닫기
          </Button>
          <Button
            color="primary"
            size="small"
            outlined={false}
            className="flex-1"
            disabled={disabled}
          >
            <DocumentArrowUpIcon className="h-4 w-4" />
            등록하기
          </Button>
        </div>
      </div>
    </Modal>
  );
}
