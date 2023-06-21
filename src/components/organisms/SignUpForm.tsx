'use client';
import { RegisterOptions, useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX } from '@/lib/regex';
import FormTextField from '@/components/molecules/FormTextField';
import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';

type SignUpFormProps = {};

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpForm({}: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const validators: {
    email: RegisterOptions;
    username: RegisterOptions;
    password: RegisterOptions;
    confirmPassword: RegisterOptions;
  } = {
    email: {
      required: 'Email is required.',
      pattern: {
        value: EMAIL_REGEX,
        message: 'Invalid email address.',
      },
    },
    username: {
      required: 'Username is required.',
      minLength: {
        value: 3,
        message: 'Username must be at least three characters.',
      },
      maxLength: {
        value: 30,
        message: 'Username must be at most thirty characters.',
      },
      pattern: {
        value: USERNAME_REGEX,
        message: 'Invalid username.',
      },
    },
    password: {
      required: 'Password is required.',
      minLength: {
        value: 8,
        message: 'Password must be at least eight characters.',
      },
      pattern: {
        value: PASSWORD_REGEX,
        message: 'Invalid password.',
      },
    },
    confirmPassword: {
      validate: (value: string) =>
        value === watch('password') || 'Passwords do not match.',
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
      <div className="mb-4">
        <FormTextField
          name="username"
          label="Username"
          helperText={
            errors.username
              ? errors.username.message
              : 'Three to thirty characters; can contain letters, numbers, dashes, underscores, and periods.'
          }
          error={!!errors.username}
          register={register}
          validators={validators.username}
        />
      </div>
      <div className="mb-4">
        <FormTextField
          name="password"
          label="Password"
          type="password"
          helperText={
            errors.password
              ? errors.password.message
              : 'Minimum eight characters, at least one letter and one number.'
          }
          error={!!errors.password}
          register={register}
          validators={validators.password}
        />
      </div>
      <div className="mb-8">
        <FormTextField
          name="confirmPassword"
          label="Confirm password"
          type="password"
          helperText={errors.confirmPassword && errors.confirmPassword.message}
          error={!!errors.confirmPassword}
          register={register}
          validators={validators.confirmPassword}
        />
      </div>
      <div className="flex items-center justify-between">
        <Link href="/signin">Sign in instead</Link>
        <Button type="submit">Sign up</Button>
      </div>
    </form>
  );
}
