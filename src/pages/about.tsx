import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    const { t, i18n } = useTranslation("common");
    const fontClass = i18n.language === "ko" ? "font-paperlogy" : "font-sans";

    const renderMultilineText = (text: string) => {
        return text.split("\n").map((line, idx, arr) => {
            if (line.includes("아래")) {
                const parts = line.split("아래");
                return (
                    <p key={idx}>
                        {parts[0]}아래
                        <br className="md:hidden" aria-hidden="true" />
                        <span className="hidden md:inline"> </span>
                        {parts[1]}
                        {idx < arr.length - 1 && <br aria-hidden="true" />}
                    </p>
                );
            }
            return (
                <p key={idx}>
                    {line}
                    {idx < arr.length - 1 && <br aria-hidden="true" />}
                </p>
            );
        });
    };

    return (
        <>
            <Head>
                <title>{t("about.title")} | MOnE</title>
                <meta
                    name="description"
                    content="MOnE는 2021년 창립된 애니메이션 스튜디오입니다. 과감한 뉴 테크놀로지와 미디어의 접합을 통해 가치있는 컨텐츠를 제작합니다."
                />
                <meta
                    name="keywords"
                    content="애니메이션, 모앤, MOnE, 스튜디오, AR, VR, 메타버스, IP"
                />
                <meta
                    property="og:title"
                    content={`${t(
                        "about.title"
                    )} | MOnE - 감정을 움직이는 애니메이션 스튜디오`}
                />
                <meta
                    property="og:description"
                    content="MOnE는 2021년 창립된 애니메이션 스튜디오입니다. 과감한 뉴 테크놀로지와 미디어의 접합을 통해 가치있는 컨텐츠를 제작합니다."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://monestudio.com/about" />
                <html lang={t("lang.code")} />
            </Head>
            <main
                className="mt-[61px] py-16 md:py-32 flex flex-col md:flex-row justify-center gap-10 md:gap-40"
                role="main"
                tabIndex={-1}
            >
                <section
                    aria-labelledby="about-title"
                    className="text-center md:text-left"
                >
                    <h1
                        id="about-title"
                        className={`text-[80px] md:text-[130px] font-bold leading-none ${fontClass}`}
                    >
                        {t("about.h1")}
                    </h1>
                    <h2
                        className={`text-[40px] md:text-[70px] leading-none ${fontClass}`}
                    >
                        {t("about.subtitle")}
                    </h2>
                </section>
                <section
                    className={`text-gray-500 ${fontClass} px-4 md:px-0`}
                    aria-labelledby="about-description"
                >
                    <div className="pb-4 border-b border-gray-500">
                        <p className="text-[10px] md:text-base">
                            {renderMultilineText(t("about.description1"))}
                        </p>
                        <p className="text-[10px] md:text-base">
                            {renderMultilineText(t("about.description2"))}
                        </p>
                        <p className="text-[10px] md:text-base">
                            {renderMultilineText(t("about.description3"))}
                        </p>
                    </div>
                    <div
                        className="pt-4"
                        role="list"
                        aria-label={t("about.goals.title")}
                    >
                        <h3 className="sr-only">{t("about.goals.title")}</h3>
                        <ul className="md:space-y-4">
                            <li role="listitem">
                                <p className="text-[10px] md:text-base">
                                    {renderMultilineText(t("about.goals.1"))}
                                </p>
                            </li>
                            <li role="listitem">
                                <p className="text-[10px] md:text-base">
                                    {renderMultilineText(t("about.goals.2"))}
                                </p>
                            </li>
                            <li role="listitem">
                                <p className="text-[10px] md:text-base">
                                    {renderMultilineText(t("about.goals.3"))}
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <section
                className={`text-center text-xl md:text-[44px] mb-18 px-4 md:px-0 ${fontClass}`}
                aria-label={t("about.artists.title")}
            >
                <h2 className="sr-only">{t("about.artists.title")}</h2>
                <p className="text-[25px] md:text-[40px] mt-12 md:mt-0">
                    {renderMultilineText(t("about.artists.description"))}
                </p>
            </section>
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
