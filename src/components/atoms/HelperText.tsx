type HelperTextProps = {
  error?: boolean;
  children: React.ReactNode;
};

export default function HelperText({ children, error }: HelperTextProps) {
  return (
    <p className={`text-xs italic ${error && 'text-red-500'}`}>{children}</p>
  );
}
