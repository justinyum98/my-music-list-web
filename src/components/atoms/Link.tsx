import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ href, children, className }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={
        className ||
        'inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
      }
    >
      {children}
    </NextLink>
  );
}
