'use client';
import { RegisterOptions, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import FormTextField from '@/components/molecules/FormTextField';
import Link from '@/components/atoms/Link';
import Button from '@/components/atoms/Button';
import Divider from '@/components/atoms/Divider';
import { EMAIL_REGEX } from '@/lib/regex';

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

  async function handleSignIn({
    provider,
  }: {
    provider: 'facebook' | 'google' | 'spotify';
  }) {
    signIn(provider);
  }

  return (
    <form
      className="w-full max-w-md rounded bg-slate-50 px-8 md:p-8 md:shadow-md"
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
      <div className="mb-4">
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
      <div className="mb-4">
        <Divider>or</Divider>
      </div>
      <div className="mb-5 w-full">
        <Button
          onClick={() => handleSignIn({ provider: 'facebook' })}
          className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign In with Facebook
        </Button>
      </div>
      <div className="mb-5 w-full">
        <Button
          onClick={() => handleSignIn({ provider: 'google' })}
          className="focus:shadow-outline w-full rounded border bg-white px-4 py-2 text-center font-bold text-gray-500 hover:bg-gray-200 focus:outline-none"
        >
          Sign In with Google
        </Button>
      </div>
      <div className="w-full">
        <Button
          onClick={() => handleSignIn({ provider: 'spotify' })}
          className="focus:shadow-outline w-full rounded bg-green-400 px-4 py-2 text-center font-bold text-white hover:bg-green-500 focus:outline-none"
        >
          Sign In with Spotify
        </Button>
      </div>
    </form>
  );
}
