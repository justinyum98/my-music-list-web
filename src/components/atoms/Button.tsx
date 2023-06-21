type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  type = 'button',
  onClick,
  fullWidth,
  className,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className ||
        `focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none ${
          fullWidth && 'w-full'
        } ${onClick && 'hover:bg-blue-700'}`
      }
    >
      {children}
    </button>
  );
}
