type InputLabelProps = {
  label: string;
};

export default function InputLabel({ label }: InputLabelProps) {
  return (
    <label className="mb-2 block text-sm font-bold text-gray-700">
      {label}
    </label>
  );
}
