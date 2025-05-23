"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

export default function Header() {
    const router = useRouter();
    const { t, i18n } = useTranslation("common");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const fontClass = i18n.language === "ko" ? "font-paperlogy" : "font-sans";

    const changeLanguage = (lang: string) => {
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    // ESC 키로 메뉴 닫기
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            window.addEventListener("keydown", handleEsc);
            // 메뉴가 열렸을 때 스크롤 방지
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
            // 메뉴가 닫혔을 때 스크롤 복구
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-20 pt-6 pb-2 flex justify-between border-b-1 bg-white ${fontClass}`}
        >
            <Link
                href="/"
                className="text-xl font-bold"
                aria-label="MOnE 홈으로 이동"
            >
                MOnE
            </Link>

            {/* 햄버거 메뉴 버튼 (모바일) */}
            <button
                className="md:hidden fixed top-6 right-4 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                aria-expanded={isMenuOpen}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* 데스크톱 메뉴 */}
            <nav className="hidden md:block" aria-label="메인 메뉴">
                <ul className="flex gap-10">
                    <li>
                        <Link
                            href="/story"
                            className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                            aria-label={t("menu.story")}
                        >
                            {t("menu.story")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                            aria-label={t("menu.about")}
                        >
                            {t("menu.about")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/join"
                            className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                            aria-label={t("menu.join")}
                        >
                            {t("menu.join")}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* 언어 선택 */}
            <nav className="hidden md:block" aria-label="언어 선택">
                <ul className="flex gap-2 text-xl font-bold">
                    <li>
                        <button
                            onClick={() => changeLanguage("ko")}
                            aria-label={t("lang.ko")}
                            aria-current={
                                router.locale === "ko" ? "page" : undefined
                            }
                            className="cursor-pointer hover:text-gray-600"
                        >
                            Kor
                        </button>
                    </li>
                    <li>
                        <span aria-hidden="true">/</span>
                    </li>
                    <li>
                        <button
                            onClick={() => changeLanguage("en")}
                            aria-label={t("lang.en")}
                            aria-current={
                                router.locale === "en" ? "page" : undefined
                            }
                            className="cursor-pointer hover:text-gray-600"
                        >
                            Eng
                        </button>
                    </li>
                </ul>
            </nav>

            {/* 모바일 메뉴 오버레이 */}
            {isMenuOpen && (
                <div
                    className={`fixed inset-y-0 right-0 w-64 bg-white z-40 md:hidden shadow-lg ${fontClass}`}
                >
                    <div className="flex flex-col items-center pt-20 space-y-8">
                        <nav aria-label="모바일 메인 메뉴">
                            <ul className="flex flex-col items-center space-y-6 text-xl">
                                <li>
                                    <Link
                                        href="/story"
                                        className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                                        onClick={() => setIsMenuOpen(false)}
                                        aria-label={t("menu.story")}
                                    >
                                        {t("menu.story")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                                        onClick={() => setIsMenuOpen(false)}
                                        aria-label={t("menu.about")}
                                    >
                                        {t("menu.about")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/join"
                                        className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-600 after:transition-all after:duration-200 hover:after:w-full"
                                        onClick={() => setIsMenuOpen(false)}
                                        aria-label={t("menu.join")}
                                    >
                                        {t("menu.join")}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-label="모바일 언어 선택">
                            <ul className="flex gap-2 text-xl font-bold">
                                <li>
                                    <button
                                        onClick={() => {
                                            changeLanguage("ko");
                                            setIsMenuOpen(false);
                                        }}
                                        aria-label={t("lang.ko")}
                                        aria-current={
                                            router.locale === "ko"
                                                ? "page"
                                                : undefined
                                        }
                                        className="cursor-pointer hover:text-gray-600"
                                    >
                                        Kor
                                    </button>
                                </li>
                                <li>
                                    <span aria-hidden="true">/</span>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            changeLanguage("en");
                                            setIsMenuOpen(false);
                                        }}
                                        aria-label={t("lang.en")}
                                        aria-current={
                                            router.locale === "en"
                                                ? "page"
                                                : undefined
                                        }
                                        className="cursor-pointer hover:text-gray-600"
                                    >
                                        Eng
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
