type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
};

export default function Button({
    type = 'button',
    onClick,
    children,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
            {children}
        </button>
    );
}
