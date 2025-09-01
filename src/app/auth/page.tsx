'use client';

import { RedirectType, redirect } from 'next/navigation';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

import Button from '@/components/ui/button';
import Logo from '@/components/ui/logo';

export default function Page() {
  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-60 px-6">
      <div className="flex items-center gap-5">
        <Logo size="2xl" />
        <p className="text-2xl font-light text-gray-500">Everything</p>
      </div>

      <Button
        className="flex w-full max-w-[320px] items-center justify-center gap-2"
        onClick={() => {
          redirect(
            process.env['NEXT_PUBLIC_API_URL'] + 'api/auth/oauth/wink',
            RedirectType.replace
          );
        }}
      >
        시작하기
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
