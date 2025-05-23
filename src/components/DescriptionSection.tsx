import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function DescriptionSection() {
    const { i18n } = useTranslation("common");
    const fontClass = i18n.language === "ko" ? "font-paperlogy" : "font-sans";

    return (
        <section
            className={`py-8 px-4 lg:px-20 lg:py-16 ${fontClass}`}
            aria-label="스튜디오 소개 및 참여 유도 섹션"
        >
            <p className="text-xs lg:text-xl">
                이야기가 다 끝났다고 생각하셨나요? 지금부터 진짜가 시작됩니다.
            </p>

            <nav
                className="flex justify-between mt-10 lg:text-2xl lg:font-bold"
                aria-label="스튜디오 탐색 메뉴"
            >
                <Link
                    href="/about"
                    className="group"
                    aria-label="모앤이 스튜디오 소개 페이지로 이동"
                >
                    <button
                        className="flex items-center gap-2 transition-colors hover:text-gray-600"
                        aria-label="모앤이 스튜디오 소개 페이지로 이동"
                    >
                        <span aria-hidden="true">▶</span>
                        <span>모앤이에 대해 더 알아보기</span>
                    </button>
                </Link>

                <Link
                    href="/join"
                    className="group"
                    aria-label="함께 만들기 페이지로 이동"
                >
                    <button
                        className="flex items-center gap-2 transition-colors hover:text-gray-600"
                        aria-label="함께 만들기 페이지로 이동"
                    >
                        <span aria-hidden="true">▶</span>
                        <span>함께 만들기</span>
                    </button>
                </Link>
            </nav>
        </section>
    );
}
