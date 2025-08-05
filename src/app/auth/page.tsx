'use client';

import Link from 'next/link';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';

export default function Page() {
  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-[245px] px-6">
      <div className="flex items-center gap-5">
        <Logo size="2xl" />
        <p className="text-2xl font-light text-gray-500">Everything</p>
      </div>

      <Link href="/auth/oauth" className="flex w-full justify-center">
        <Button className="flex w-full max-w-[320px] items-center justify-center gap-2">
          시작하기
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
