import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/outline';

type AvatarProps = {
    src?: string | null;
    width: number;
    alt: string;
};

export default function Avatar({ src, width, alt }: AvatarProps) {
    if (!src) {
        return (
            <UserCircleIcon
                className="rounded-full bg-white"
                width={width}
                height={width}
            />
        );
    }

    return (
        <Image
            src={src}
            width={width}
            height={width}
            alt={alt}
            className="rounded-full"
        />
    );
}
