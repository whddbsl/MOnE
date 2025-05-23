import ThumbnailCard from "@/components/ThumbnailCard";
import { usePortfolioImages } from "@/constants/portfolioImages";

interface PortfolioSectionProps {
    onSelectProject: (projectIndex: number, imageSrc: string) => void;
}

export default function PortfolioSection({
    onSelectProject,
}: PortfolioSectionProps) {
    const portfolioImages = usePortfolioImages();

    const handleProjectClick = (projectIndex: number, imageSrc: string) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        onSelectProject(projectIndex, imageSrc);
    };

    return (
        <section className="px-4 py-8 bg-black lg:px-14">
            <div className="flex flex-wrap gap-x-[1%] gap-y-2 md:gap-y-8 justify-start">
                {portfolioImages.map((image, index) => (
                    <ThumbnailCard
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                        href={image.href}
                        mobileWidthClass={image.mobileWidthClass}
                        lgWidthClass={image.lgWidthClass}
                        aspectClass={image.aspectClass}
                        onClick={() =>
                            handleProjectClick(image.projectIndex, image.src)
                        }
                    />
                ))}
            </div>
        </section>
    );
}
