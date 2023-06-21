import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import StandardPageLayout from '@/components/templates/StandardPageLayout';
import { authOptions } from '@/lib/auth';

export const metadata = {
    title: 'Dashboard',
    description: 'My Music List dashboard',
};

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <StandardPageLayout user={session.user}>{children}</StandardPageLayout>
    );
}
