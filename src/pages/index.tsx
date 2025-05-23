import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import DescriptionSection from "@/components/DescriptionSection";

export default function Home() {
    const { t, i18n } = useTranslation("common");
    const [selectedProject, setSelectedProject] = useState<{
        projectIndex: number;
        image: string;
    } | null>(null);
    const fontClass = i18n.language === "ko" ? "font-paperlogy" : "font-sans";

    return (
        <>
            <Head>
                <title>{`${t("about")} | MOnE`}</title>
                <meta
                    name="description"
                    content="MOnE 애니메이션 회사 홈페이지"
                />
                <html lang={t("lang.code")} />
            </Head>
            <main className={fontClass}>
                {selectedProject === null ? (
                    <HeroSection />
                ) : (
                    <ProjectDetailSection
                        selectedProjectIndex={
                            selectedProject?.projectIndex ?? null
                        }
                        selectedImage={selectedProject?.image ?? null}
                    />
                )}

                <PortfolioSection
                    onSelectProject={(projectIndex, image) =>
                        setSelectedProject({ projectIndex, image })
                    }
                />
                <DescriptionSection />
            </main>
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
