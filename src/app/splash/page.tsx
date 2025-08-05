'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Logo from '@/components/ui/logo';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/on-board');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-end gap-[358px]">
      <Logo size="3xl"></Logo>
      <p className="mb-12 text-gray-600">WINK</p>
    </div>
  );
}
