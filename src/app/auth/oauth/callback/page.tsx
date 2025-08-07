'use client';

import Logo from '@/components/ui/logo';
import Spinner from '@/components/ui/spinner';

export default function CallbackPage() {
  // TODO: WINK OAuth 로그인 후 code 처리 및 사용자 로그인 상태 저장 예정

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-4">
      <Logo size="3xl" />
      <Spinner />
    </div>
  );
}
