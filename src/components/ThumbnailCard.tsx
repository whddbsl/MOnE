import Image from "next/image";
import clsx from "clsx";

interface ThumbnailCardProps {
    src: string;
    alt: string;
    title: string;
    href: string;
    mobileWidthClass: string;
    lgWidthClass: string;
    aspectClass: string;
    onClick?: () => void;
}

export default function ThumbnailCard({
    src,
    alt,
    title,
    mobileWidthClass,
    lgWidthClass,
    aspectClass,
    onClick,
}: ThumbnailCardProps) {
    return (
        <div
            className={clsx(
                "relative group overflow-hidden",
                mobileWidthClass,
                lgWidthClass,
                aspectClass,
                "cursor-pointer"
            )}
            onClick={onClick}
        >
            <div className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                    {title}
                </span>
            </div>
        </div>
    );
}
