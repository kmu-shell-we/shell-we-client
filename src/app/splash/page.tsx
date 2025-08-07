'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Logo from '@/components/ui/logo';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // TODO: On Board 페이지 구현 예정
      router.replace('/on-board');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-96">
      <Logo size="3xl" />
      <p className="text-gray-600">WINK</p>
    </div>
  );
}
