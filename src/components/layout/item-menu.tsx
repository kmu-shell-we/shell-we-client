'use client';

import { usePathname, useRouter } from 'next/navigation';

import clsx from 'clsx';

const menuItems = [
  { name: '홈', href: '/' },
  { name: '팀', href: '/team' },
  { name: '갤러리', href: '/gallery' },
  { name: '아이템', href: '/item' },
];

export default function ItemMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex items-center gap-2">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <button
            key={item.name}
            onClick={() => router.push(item.href)}
            className={clsx(
              'relative px-[6px] text-lg font-normal',
              isActive
                ? 'font-bold text-black after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-[1px] after:bg-black'
                : 'text-gray-500'
            )}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
