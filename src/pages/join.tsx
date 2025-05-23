import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Join() {
    const { t, i18n } = useTranslation("common");
    const fontClass = i18n.language === "ko" ? "font-paperlogy" : "font-sans";

    return (
        <>
            <Head>
                <title>{t("join.title")} | MOnE</title>
                <meta name="description" content={t("join.description")} />
                <meta
                    name="keywords"
                    content="모앤이, MOnE, 채용, 구인, 애니메이션 스튜디오, 취업"
                />
                <meta
                    property="og:title"
                    content={`${t(
                        "join.title"
                    )} | MOnE - 감정을 움직이는 애니메이션 스튜디오`}
                />
                <meta
                    property="og:description"
                    content={t("join.description")}
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://monestudio.com/join" />
                <html lang={t("lang.code")} />
            </Head>

            <main
                className="w-full min-h-screen bg-white text-black pt-[61px] py-32 px-6 md:px-32 flex flex-col gap-20"
                role="main"
                tabIndex={-1}
            >
                {/* 메인 타이틀 */}
                <section aria-labelledby="join-title">
                    <h1
                        id="join-title"
                        className={`text-[90px] md:text-[200px] font-bold leading-none mt-30 ${fontClass}`}
                    >
                        {t("join.h1")}
                    </h1>
                </section>

                {/* 우측 하단 박스 - 연락처 정보 */}
                <section
                    className={`self-end border-2 border-black p-6 md:px-10 py-16 text-sm md:text-base bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] ${fontClass}`}
                    aria-labelledby="contact-title"
                >
                    <h2 id="contact-title" className="sr-only">
                        {t("join.contact.title")}
                    </h2>
                    <dl className="flex flex-col gap-4">
                        <div className="flex md:gap-4">
                            <dt className="w-16 font-bold md:w-16">
                                {t("join.contact.address")}
                            </dt>
                            <dd>
                                <address className="not-italic">
                                    {t("join.contact.addressValue")}
                                </address>
                            </dd>
                        </div>
                        <div className="flex md:gap-4">
                            <dt className="w-12 font-bold md:w-16">
                                {t("join.contact.tel")}
                            </dt>
                            <dd>
                                <a
                                    href="tel:+82-10-4149-1832"
                                    className="hover:underline"
                                    aria-label={t("join.contact.telLabel")}
                                >
                                    +82 10-4149-1832
                                </a>
                            </dd>
                        </div>
                        <div className="flex md:gap-4">
                            <dt className="w-12 font-bold md:w-16">
                                {t("join.contact.email")}
                            </dt>
                            <dd>
                                <a
                                    href="mailto:karu0613@naver.com"
                                    className="hover:underline"
                                    aria-label={t("join.contact.emailLabel")}
                                >
                                    karu0613@naver.com
                                </a>
                            </dd>
                        </div>
                    </dl>
                </section>
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
