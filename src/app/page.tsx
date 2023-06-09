import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Link from '@/components/atoms/Link';
import { authOptions } from '@/lib/auth';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(`/dashboard`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-2">My Music List Landing Page</h1>
      <Link href="/api/auth/signin">Sign In</Link>
    </main>
  );
}
