import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

type DashboardPageProps = {};

export default async function DashboardPage({}: DashboardPageProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <div>
            <p>
                Hello, {session.user?.email}! Name: {session.user?.name}
            </p>
        </div>
    );
}
