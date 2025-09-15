'use client';

import Link from 'next/link';

import Avatar from '@/components/ui/avatar';
import Logo from '@/components/ui/logo';

import { useUserStore } from '@/store/user';

export default function Header() {
  const { user } = useUserStore();

  return (
    <header className="flex w-full items-center justify-between border-b border-gray-100 bg-white px-6 py-2">
      <Link href="/">
        <Logo />
      </Link>
      {user && <Avatar src={user.avatar ?? ''} alt={user.name} fallback={user.name?.charAt(0)} />}
    </header>
  );
}
