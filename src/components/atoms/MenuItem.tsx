'use client';
import Link from '@/components/atoms/Link';

export type MenuItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function MenuItem({ href, children }: MenuItemProps) {
  return (
    <div className="w-full px-4 py-2 text-left hover:bg-gray-300">
      <Link href={href} className="text-black">
        {children}
      </Link>
    </div>
  );
}
