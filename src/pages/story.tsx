import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import ProjectStory from "@/components/ProjectStory";
import Head from "next/head";

export default function Story() {
    const { i18n, t } = useTranslation("common");
    const fontClass =
        i18n.language === "ko" ? "font-paperlogy" : "font-helvetica";

    const projects = [
        {
            src: "/images/SuperClock.png",
            titleKey: "portfolio.superclock.title",
        },
        {
            src: "/images/Foodrangers.jpg",
            titleKey: "portfolio.foodrangers.title",
        },
        {
            src: "/images/PipPopPoPiA.png",
            titleKey: "portfolio.pippoppopia.title",
        },
        { src: "/images/Pawaw.png", titleKey: "portfolio.pawaw.title" },
        {
            src: "/images/opportunity.png",
            titleKey: "portfolio.opportunity.title",
        },
        { src: "/images/BookyPaky.png", titleKey: "portfolio.bookypaky.title" },
        { src: "/images/Fuzz.png", titleKey: "portfolio.fuzz.title" },
        { src: "/images/PinPin.png", titleKey: "portfolio.pinpin.title" },
    ];

    return (
        <>
            <Head>
                <title>Story - Mone Studio</title>
                <meta
                    name="description"
                    content="MOnE의 탄생 스토리와 여정을 소개합니다."
                />
                <meta
                    name="keywords"
                    content="Mone Studio, 프로젝트 스토리, 애니메이션, 캐릭터"
                />
                <meta property="og:title" content="Story - Mone Studio" />
                <meta
                    property="og:description"
                    content="MOnE의 탄생 스토리와 여정을 소개합니다."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://monestudio.com/story" />
            </Head>
            <main
                className={`min-h-screen ${fontClass} mt-[61px]`}
                role="main"
                aria-label="프로젝트 스토리"
            >
                <header className="py-8">
                    <h1
                        className="text-[100px] mt-7 font-bold text-center"
                        id="story-title"
                    >
                        {t("story.title")}
                    </h1>
                </header>
                <section
                    className="flex flex-wrap justify-between px-2 py-6 bg-black md:py-10 md:px-14 gap-y-2 md:gap-y-5"
                    aria-labelledby="story-title"
                >
                    <h2 className="sr-only">프로젝트 목록</h2>

                    {projects.map((project, index) => (
                        <ProjectStory
                            key={`${project.titleKey}-${index}`}
                            src={project.src}
                            title={t(project.titleKey)}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "ko", ["common"])),
        },
    };
};
