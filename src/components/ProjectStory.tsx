import Image from "next/image";

const ProjectStory = ({ src, title }: { src: string; title: string }) => {
    return (
        <div className="flex flex-col w-1/2 px-2 mb-6 md:w-1/4">
            <div className="relative w-full aspect-square">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                    priority
                    quality={100}
                />
            </div>
            <p className="mt-3 text-white">{title}</p>
        </div>
    );
};

export default ProjectStory;
