import { useTranslation } from "next-i18next";
import { useProjectDetails } from "@/constants/projectDetails";
import Image from "next/image";
import { memo } from "react";
import Head from "next/head";

interface ProjectDetailSectionProps {
    selectedProjectIndex: number | null;
    selectedImage: string | null;
}

const ProjectDetailSection = memo(
    ({ selectedProjectIndex, selectedImage }: ProjectDetailSectionProps) => {
        const { i18n, t } = useTranslation("common");
        const { getProjectDetail } = useProjectDetails();
        const fontClass =
            i18n.language === "ko" ? "font-paperlogy" : "font-sans";

        if (selectedProjectIndex === null) return null;
        const selectedProjectDetail = getProjectDetail(selectedProjectIndex);
        if (!selectedProjectDetail) return null;

        const renderContent = (content: string, hasRichContent: boolean) => {
            if (!hasRichContent) {
                return content.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ));
            }
            return <div dangerouslySetInnerHTML={{ __html: content }} />;
        };

        return (
            <>
                <Head>
                    <title>{`${selectedProjectDetail.title} - Project Details`}</title>
                    <meta
                        name="description"
                        content={selectedProjectDetail.description}
                    />
                    <meta
                        property="og:title"
                        content={selectedProjectDetail.title}
                    />
                    <meta
                        property="og:description"
                        content={selectedProjectDetail.description}
                    />
                    <meta property="og:image" content={selectedImage || ""} />
                </Head>
                <section
                    className={`mt-[61px] ${fontClass} h-auto md:h-[70vh] flex`}
                    aria-labelledby="project-title"
                    role="region"
                >
                    <div className="flex flex-col md:mx-6 md:h-full md:w-full md:flex-row">
                        {/* 왼쪽: 이미지 */}
                        <figure className="flex items-center justify-center w-full h-[40vh] md:w-1/2 md:h-full pt-4 md:mr-4">
                            <div className="relative w-full h-full">
                                <Image
                                    src={selectedImage || ""}
                                    alt={selectedProjectDetail.title}
                                    fill
                                    className="object-contain pb-4"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="eager"
                                />
                            </div>
                        </figure>
                        <article className="flex flex-col w-full max-h-full pt-4 md:w-1/2 md:h-full md:pt-20 md:overflow-y-auto md:border-l-1">
                            <header className="flex gap-1 pb-2 pl-6 mb-4 text-3xl font-bold md:gap-2 md:text-5xl border-b-1">
                                <h2 id="project-title" className="sr-only">
                                    {selectedProjectDetail.title}
                                </h2>
                                <h3 className="text-3xl font-bold md:text-5xl">
                                    {selectedProjectDetail.title}
                                </h3>
                                <Image
                                    src={selectedProjectDetail.icon}
                                    alt={`${selectedProjectDetail.title} 아이콘`}
                                    width={100}
                                    height={100}
                                    className="object-contain w-12 h-10 md:w-20 md:h-12"
                                    priority
                                    aria-hidden="true"
                                />
                            </header>
                            <div className="p-4 m-4 whitespace-pre-line md:p-4 md:m-6 border-1">
                                {selectedProjectDetail.subTitle && (
                                    <h4
                                        className="mb-4 text-lg font-bold md:mb-6 md:text-xl"
                                        aria-label={t("projectDetail.subtitle")}
                                    >
                                        {renderContent(
                                            selectedProjectDetail.subTitle,
                                            selectedProjectDetail.hasRichContent ||
                                                false
                                        )}
                                    </h4>
                                )}
                                <p
                                    className="text-[11px] md:text-[15px]"
                                    aria-label={t("projectDetail.description")}
                                >
                                    {renderContent(
                                        selectedProjectDetail.description,
                                        selectedProjectDetail.hasRichContent ||
                                            false
                                    )}
                                </p>
                                {selectedProjectDetail.subDescription && (
                                    <p
                                        className="mt-4 text-sm font-bold md:mt-6 md:text-base"
                                        aria-label={t(
                                            "projectDetail.subDescription"
                                        )}
                                    >
                                        {renderContent(
                                            selectedProjectDetail.subDescription,
                                            selectedProjectDetail.hasRichContent ||
                                                false
                                        )}
                                    </p>
                                )}
                            </div>
                            <dl className="flex flex-col gap-4 p-4 ml-2 text-sm whitespace-pre-line md:gap-6 md:p-6 md:ml-4 md:text-base">
                                <div className="flex gap-4 md:gap-10">
                                    <dt className="font-bold">
                                        {t("projectDetail.genre")}
                                    </dt>
                                    <dd>{selectedProjectDetail.genre}</dd>
                                </div>
                                <div className="flex gap-4 md:gap-10">
                                    <dt className="font-bold">
                                        {t("projectDetail.target")}
                                    </dt>
                                    <dd>{selectedProjectDetail.target}</dd>
                                </div>
                                <div className="flex gap-4 md:gap-10">
                                    <dt className="font-bold">
                                        {t("projectDetail.format")}
                                    </dt>
                                    <dd>{selectedProjectDetail.format}</dd>
                                </div>
                            </dl>
                        </article>
                    </div>
                </section>
            </>
        );
    }
);

ProjectDetailSection.displayName = "ProjectDetailSection";

export default ProjectDetailSection;
