'use client';
import { RegisterOptions, useForm } from 'react-hook-form';
import FormTextField from '../molecules/FormTextField';
import { EMAIL_REGEX } from '../../utils/regex';
import Link from '../atoms/Link';
import Button from '../atoms/Button';

type SignInFormProps = {};

export type SignInFormData = {
    email: string;
    password: string;
};

export default function SignInForm({}: SignInFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>();
    const onSubmit = handleSubmit((data) => console.log(data));

    const validators: {
        email: RegisterOptions;
        password: RegisterOptions;
    } = {
        email: {
            required: 'Email is required.',
            pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid email address.',
            },
        },
        password: {
            required: 'Password is required.',
        },
    };

    return (
        <form
            className="w-full max-w-md rounded bg-white px-8 md:p-8 md:shadow-md"
            onSubmit={onSubmit}
        >
            <div className="mb-4">
                <FormTextField
                    name="email"
                    label="Email"
                    helperText={errors.email && errors.email.message}
                    error={!!errors.email}
                    register={register}
                    validators={validators.email}
                />
            </div>
            <div className="mb-8">
                <FormTextField
                    name="password"
                    label="Password"
                    type="password"
                    helperText={errors.password && errors.password.message}
                    error={!!errors.password}
                    register={register}
                    validators={validators.password}
                />
            </div>
            <div className="flex items-center justify-between">
                <Link href="/signup">Create account</Link>
                <Button type="submit">Sign in</Button>
            </div>
        </form>
    );
}
