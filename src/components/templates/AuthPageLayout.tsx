type AuthPageLayoutProps = {
    children: React.ReactNode;
};

export default function AuthPageLayoutProps({ children }: AuthPageLayoutProps) {
    return (
        <main className="h-screen w-screen md:bg-gradient-to-r md:from-blue-500 md:to-blue-600">
            {children}
        </main>
    );
}
