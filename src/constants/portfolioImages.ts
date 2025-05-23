import { useTranslation } from "next-i18next";

export const usePortfolioImages = () => {
    const { t } = useTranslation("common");

    return [
        //첫번재 줄
        {
            src: "/images/SuperClock_01.png",
            alt: t("portfolio.superclock.alt"),
            title: t("portfolio.superclock.title"),
            href: "/portfolio/superclock",
            mobileWidthClass: "w-[60%]",
            lgWidthClass: "lg:w-[30%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 0,
        },
        {
            src: "/images/Fuzz_01.png",
            alt: t("portfolio.fuzz.alt"),
            title: t("portfolio.fuzz.title"),
            href: "/portfolio/fuzz",
            mobileWidthClass: "w-[39%]",
            lgWidthClass: "lg:w-[17%]",
            aspectClass: "aspect-[4/3]",
            projectIndex: 1,
        },
        {
            src: "/images/opportunity_01.png",
            alt: t("portfolio.opportunity.alt"),
            title: t("portfolio.opportunity.title"),
            href: "/portfolio/opportunity",
            mobileWidthClass: "w-[66%]",
            lgWidthClass: "lg:w-[33%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 2,
        },
        {
            src: "/images/PipPopPoPiA_01.png",
            alt: t("portfolio.pippoppopia.alt"),
            title: t("portfolio.pippoppopia.title"),
            href: "/portfolio/pippoppopia",
            mobileWidthClass: "w-[33%]",
            lgWidthClass: "lg:w-[17%]",
            aspectClass: "aspect-[4/3]",
            projectIndex: 3,
        },
        // 두번째 줄
        {
            src: "/images/PipPopPoPiA_02.png",
            alt: t("portfolio.pippoppopia.alt"),
            title: t("portfolio.pippoppopia.title"),
            href: "/portfolio/pippoppopia",
            mobileWidthClass: "w-[60%]",
            lgWidthClass: "lg:w-[45%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 3,
        },
        {
            src: "/images/opportunity_02.png",
            alt: t("portfolio.opportunity.alt"),
            title: t("portfolio.opportunity.title"),
            href: "/portfolio/opportunity",
            mobileWidthClass: "w-[39%]",
            lgWidthClass: "lg:w-[35%]",
            aspectClass: "aspect-[4/3]",
            projectIndex: 2,
        },
        {
            src: "/images/foodrangers_01.png",
            alt: t("portfolio.foodrangers.alt"),
            title: t("portfolio.foodrangers.title"),
            href: "/portfolio/foodrangers",
            mobileWidthClass: "w-[30%]",
            lgWidthClass: "lg:w-[18%]",
            aspectClass: "aspect-[3/4]",
            projectIndex: 4,
        },

        // 세번째 줄
        {
            src: "/images/Pawaw_01.png",
            alt: t("portfolio.pawaw.alt"),
            title: t("portfolio.pawaw.title"),
            href: "/portfolio/pawaw",
            mobileWidthClass: "w-[69%]",
            lgWidthClass: "lg:w-[34%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 5,
        },
        {
            src: "/images/pinpin_01.png",
            alt: t("portfolio.pinpin.alt"),
            title: t("portfolio.pinpin.title"),
            href: "/portfolio/pinpin",
            mobileWidthClass: "w-[33%]",
            lgWidthClass: "lg:w-[16%]",
            aspectClass: "aspect-[8/9]",
            projectIndex: 6,
        },
        {
            src: "/images/foodrangers_02.png",
            alt: t("portfolio.foodrangers.alt"),
            title: t("portfolio.foodrangers.title"),
            href: "/portfolio/foodrangers",
            mobileWidthClass: "w-[66%]",
            lgWidthClass: "lg:w-[33%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 4,
        },
        {
            src: "/images/superclock_02.png",
            alt: t("portfolio.superclock.alt"),
            title: t("portfolio.superclock.title"),
            href: "/portfolio/superclock",
            mobileWidthClass: "w-[27%]",
            lgWidthClass: "lg:w-[14%]",
            aspectClass: "aspect-[3/4]",
            projectIndex: 0,
        },
        /// 4번째 줄
        {
            src: "/images/BookyPaky_01.png",
            alt: t("portfolio.bookypaky.alt"),
            title: t("portfolio.bookypaky.title"),
            href: "/portfolio/bookypaky",
            mobileWidthClass: "w-[72%]",
            lgWidthClass: "lg:w-[48%]",
            aspectClass: "aspect-[21/9]",
            projectIndex: 7,
        },
        {
            src: "/images/pinpin_02.png",
            alt: t("portfolio.pinpin.alt"),
            title: t("portfolio.pinpin.title"),
            href: "/portfolio/pinpin",
            mobileWidthClass: "w-[36%]",
            lgWidthClass: "lg:w-[18%]",
            aspectClass: "aspect-[9/10]",
            projectIndex: 6,
        },
        {
            src: "/images/superclock_03.png",
            alt: t("portfolio.superclock.alt"),
            title: t("portfolio.superclock.title"),
            href: "/portfolio/superclock",
            mobileWidthClass: "w-[63%]",
            lgWidthClass: "lg:w-[32%]",
            aspectClass: "aspect-[8/3]",
            projectIndex: 0,
        },

        // 5번째 줄
        {
            src: "/images/foodrangers_03.png",
            alt: t("portfolio.foodrangers.alt"),
            title: t("portfolio.foodrangers.title"),
            href: "/portfolio/foodrangers",
            mobileWidthClass: "w-[56%]",
            lgWidthClass: "lg:w-[30%]",
            aspectClass: "aspect-[5/3]",
            projectIndex: 4,
        },
        {
            src: "/images/pinpin_03.png",
            alt: t("portfolio.pinpin.alt"),
            title: t("portfolio.pinpin.title"),
            href: "/portfolio/pinpin",
            mobileWidthClass: "w-[43%]",
            lgWidthClass: "lg:w-[18%]",
            aspectClass: "aspect-[1/1]",
            projectIndex: 6,
        },
        {
            src: "/images/PipPopPoPiA_03.png",
            alt: t("portfolio.pippoppopia.alt"),
            title: t("portfolio.pippoppopia.title"),
            href: "/portfolio/pippoppopia",
            mobileWidthClass: "w-[69%]",
            lgWidthClass: "lg:w-[33%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 3,
        },
        {
            src: "/images/Pawaw_02.png",
            alt: t("portfolio.pawaw.alt"),
            title: t("portfolio.pawaw.title"),
            href: "/portfolio/pawaw",
            mobileWidthClass: "w-[30%]",
            lgWidthClass: "lg:w-[16%]",
            aspectClass: "aspect-[4/5]",
            projectIndex: 5,
        },

        // 6번째 줄
        {
            src: "/images/Fuzz_02.png",
            alt: t("portfolio.fuzz.alt"),
            title: t("portfolio.fuzz.title"),
            href: "/portfolio/fuzz",
            mobileWidthClass: "w-[36%]",
            lgWidthClass: "lg:w-[20%]",
            aspectClass: "aspect-[4/3]",
            projectIndex: 1,
        },
        {
            src: "/images/Pawaw_03.png",
            alt: t("portfolio.pawaw.alt"),
            title: t("portfolio.pawaw.title"),
            href: "/portfolio/pawaw",
            mobileWidthClass: "w-[63%]",
            lgWidthClass: "lg:w-[29%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 5,
        },
        {
            src: "/images/BookyPaky_02.png",
            alt: t("portfolio.bookypaky.alt"),
            title: t("portfolio.bookypaky.title"),
            href: "/portfolio/bookypaky",
            mobileWidthClass: "w-[30%]",
            lgWidthClass: "lg:w-[18%]",
            aspectClass: "aspect-[4/3]",
            projectIndex: 7,
        },
        {
            src: "/images/Fuzz_03.png",
            alt: t("portfolio.fuzz.alt"),
            title: t("portfolio.fuzz.title"),
            href: "/portfolio/fuzz",
            mobileWidthClass: "w-[69%]",
            lgWidthClass: "lg:w-[30%]",
            aspectClass: "aspect-[16/9]",
            projectIndex: 1,
        },

        // 7번째 줄
        {
            src: "/images/opportunity_03.png",
            alt: t("portfolio.opportunity.alt"),
            title: t("portfolio.opportunity.title"),
            href: "/portfolio/opportunity",
            mobileWidthClass: "w-[66%]",
            lgWidthClass: "lg:w-[48%]",
            aspectClass: "aspect-[21/9]",
            projectIndex: 2,
        },
        {
            src: "/images/foodrangers_04.png",
            alt: t("portfolio.foodrangers.alt"),
            title: t("portfolio.foodrangers.title"),
            href: "/portfolio/foodrangers",
            mobileWidthClass: "w-[33%]",
            lgWidthClass: "lg:w-[34%]",
            aspectClass: "aspect-[3/2]",
            projectIndex: 4,
        },
        {
            src: "/images/pinpin_04.png",
            alt: t("portfolio.pinpin.alt"),
            title: t("portfolio.pinpin.title"),
            href: "/portfolio/pinpin",
            mobileWidthClass: "w-[36%]",
            lgWidthClass: "lg:w-[16%]",
            aspectClass: "aspect-[3/4]",
            projectIndex: 6,
        },
    ];
};
