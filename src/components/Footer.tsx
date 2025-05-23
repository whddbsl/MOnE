import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="w-full bg-gray-200 border-t border-black"
            role="contentinfo"
            aria-label="사이트 푸터"
        >
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-sm">
                        <p>
                            © {new Date().getFullYear()} MOnE Studio. All rights
                            reserved
                        </p>
                    </div>

                    <nav
                        className="flex items-center gap-6"
                        aria-label="푸터 링크"
                    >
                        <Link
                            href="mailto:karu0613@naver.com"
                            className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
                            aria-label="이메일로 문의하기"
                        >
                            karu0613@naver.com
                        </Link>                        
                    </nav>
                </div>
            </div>
        </footer>
    );
}
