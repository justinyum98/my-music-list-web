'use client';
import * as React from 'react';
import type { DefaultSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import Avatar from '@/components/atoms/Avatar';
import DropdownMenu from '@/components/molecules/DropdownMenu';
import type { MenuItemProps } from '@/components/atoms/MenuItem';
import Link from '@/components/atoms/Link';

type HeaderProps = {
  user: DefaultSession['user'];
};

export default function Header({ user }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const items: MenuItemProps[] = [
    {
      href: '/api/auth/signout',
      children: 'Sign out',
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between bg-blue-500 px-4 shadow">
      <Link href="/dashboard" className="font-bold text-white">
        My Music List
      </Link>
      <div className="relative inline-block">
        <button
          className="m-2 rounded-full shadow hover:bg-gray-300"
          data-cy="avatar-menu-button"
          onClick={() => setOpen(!open)}
        >
          <Avatar src={user?.image} width={40} alt="User picture" />
        </button>
        <DropdownMenu hidden={!open} items={items} />
      </div>
    </header>
  );
}
