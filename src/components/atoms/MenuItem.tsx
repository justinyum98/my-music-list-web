'use client';

export type MenuItemProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

export default function MenuItem({ onClick, children }: MenuItemProps) {
    return (
        <button
            className={`w-full py-2 px-4 text-left text-black ${
                onClick && 'hover:bg-gray-300'
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
