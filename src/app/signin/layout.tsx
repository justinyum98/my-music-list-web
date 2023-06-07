import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Sign In',
    description: 'Sign in with My Music List',
};

type SignInLayoutProps = {
    children: React.ReactNode;
};

export default function SignInLayout({ children }: SignInLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
