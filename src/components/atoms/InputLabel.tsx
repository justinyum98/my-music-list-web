type InputLabelProps = {
    label: string
};

export default function InputLabel({ label }: InputLabelProps) {
    return (
        <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
    );
}
