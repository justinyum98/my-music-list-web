import { DefaultSession } from 'next-auth';
import Header from '@/components/organisms/Header';

type StandardPageLayoutProps = {
  user: DefaultSession['user'];
  children: React.ReactNode;
};

export default function StandardPageLayout({
  user,
  children,
}: StandardPageLayoutProps) {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Header user={user} />

      <div className="flex-1">{children}</div>

      <footer className="bg-blue-200">Footer content</footer>
    </main>
  );
}
