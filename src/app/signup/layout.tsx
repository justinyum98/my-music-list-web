import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Sign Up',
    description: 'Sign up with My Music List',
};

type SignUpLayoutProps = {
    children: React.ReactNode;
};

export default function SignUpLayout({ children }: SignUpLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
