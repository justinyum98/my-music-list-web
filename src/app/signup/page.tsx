import AuthPageLayout from '@/components/templates/AuthPageLayout';
import SignUpForm from '@/components/organisms/SignUpForm';

export default function SignUpPage() {
    return (
        <AuthPageLayout>
            <div className="flex h-full w-full flex-col items-center justify-center">
                <h1 className="mb-10 text-2xl md:text-4xl font-bold md:text-white">
                    Create Account
                </h1>
                <SignUpForm />
            </div>
        </AuthPageLayout>
    );
}
