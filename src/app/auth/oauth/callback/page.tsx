'use client';

import { useEffect, useRef } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { toast } from 'react-hot-toast';

import Logo from '@/components/ui/logo';
import Spinner from '@/components/ui/spinner';

import ApiRequest from '@/api/request';

type OAuthCallbackResponse = {
  token: string;
};

export default function CallbackPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const once = useRef(false);

  useEffect(() => {
    if (once.current) return;
    once.current = true;

    const code = sp.get('code');
    const oauthError = sp.get('error');

    (async () => {
      try {
        if (oauthError) {
          toast.error(`로그인 실패: ${oauthError}`);
          router.replace('/auth');
          return;
        }

        if (!code) {
          toast.error('로그인 실패: 유효하지 않은 인증 코드');
          router.replace('/auth');
          return;
        }

        const api = new ApiRequest();
        const { token } = await api.post<OAuthCallbackResponse>('/auth/oauth/wink/callback', {
          code,
        });

        await api.setToken(token);
        router.replace('/home');
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : '로그인 실패';
        toast.error(message);
        router.replace('/auth');
      }
    })();
  }, [router, sp]);

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center gap-4">
      <Logo size="3xl" />
      <Spinner />
    </div>
  );
}
