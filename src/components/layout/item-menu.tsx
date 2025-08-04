'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuItems } from '@/constant/item-menu';
import clsx from 'clsx';

export default function ItemMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'relative px-[6px] text-lg font-normal',
              isActive
                ? 'font-bold text-black after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-[1px] after:bg-black'
                : 'text-gray-500'
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
