import { RegisterOptions } from 'react-hook-form';

type TextInputProps = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: boolean;
  register?: any;
  validators?: RegisterOptions;
};

export default function TextInput({
  name,
  type,
  placeholder,
  error,
  register,
  validators,
}: TextInputProps) {
  if (register) {
    return (
      <input
        className={`mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:ring-0 ${
          error && 'border-red-500'
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, validators)}
      />
    );
  }

  return (
    <input
      className={`mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:ring-0 ${
        error && 'border-red-500'
      }`}
      type={type}
      placeholder={placeholder}
    />
  );
}
