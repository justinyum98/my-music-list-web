import AuthPageLayout from '@/components/templates/AuthPageLayout';
import SignInForm from '@/components/organisms/SignInForm';

export default function SignInPage() {
    return (
        <AuthPageLayout>
            <div className="flex h-full w-full flex-col items-center justify-center">
                <h1 className="mb-10 text-2xl md:text-4xl font-bold md:text-white">
                    Sign In
                </h1>
                <SignInForm />
            </div>
        </AuthPageLayout>
    );
}
