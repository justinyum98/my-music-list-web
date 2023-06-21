import { RegisterOptions } from 'react-hook-form';
import HelperText from '@/components/atoms/HelperText';
import InputLabel from '@/components/atoms/InputLabel';
import TextInput from '@/components/atoms/TextInput';

type FormTextFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  helperText?: string;
  error?: boolean;
  register?: any;
  validators?: RegisterOptions;
};

export default function FormTextField({
  name,
  label,
  placeholder,
  type,
  helperText,
  error,
  register,
  validators,
}: FormTextFieldProps) {
  return (
    <>
      <InputLabel label={label} />
      <TextInput
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : label}
        error={error}
        register={register}
        validators={validators}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </>
  );
}
