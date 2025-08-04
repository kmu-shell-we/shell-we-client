interface MenuItem {
  name: string;
  href: string;
}

export const menuItem: MenuItem[] = [
  {
    name: '홈',
    href: '/',
  },
  {
    name: '팀',
    href: '/team',
  },
  {
    name: '갤러리',
    href: '/gallery',
  },
  {
    name: '아이템',
    href: '/item',
  },
];
